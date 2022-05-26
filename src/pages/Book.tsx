import {
    ArrowBackIcon,
    DeleteIcon,
    EditIcon,
    NotAllowedIcon,
    PlusSquareIcon
} from "@chakra-ui/icons";
import {
    Box,
    Button,
    Container,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    TableContainer,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import BookTableBody from "../components/BookTableBody";
import {
    borrowBook,
    deleteBook,
    returnBook
} from "../features/books/booksSlice";
import {
    addBookToLibrary,
    removeBookFromLibrary
} from "../features/users/usersSlice";
import { hasBookAccess } from "../utils/auth";

const Book = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const books = useSelector((state: RootState) => state.books);
    const users = useSelector((state: RootState) => state.users);
    const auth = useSelector((state: RootState) => state.auth);
    const user = users.find((user) => user.id === auth?.user?.id);
    const book = books.find((book) => book.id === id);

    const isBookInLibrary = () => {
        return user?.books?.find((bookId) => bookId === id);
    };

    return book ? (
        <Container maxW="fit-content">
            <Box
                _hover={{
                    cursor: "pointer"
                }}
                textDecor="underline"
                fontSize="sm"
                fontWeight="semibold"
                mb="4"
                w="sm"
                onClick={() => {
                    navigate("/books");
                }}
                color="teal.400"
            >
                <ArrowBackIcon mr="2" /> Back to library
            </Box>
            <TableContainer mb={4}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Genre</Th>
                            <Th>Author</Th>
                            <Th>Year Published</Th>
                            <Th>Availability</Th>
                            <Th>Last Borrowed By</Th>
                        </Tr>
                    </Thead>
                    <BookTableBody {...book} isLink={false} />
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="flex-end" mb="4">
                {auth.isLoggedIn && (
                    <Menu>
                        <MenuButton
                            as={Button}
                            colorScheme="blackAlpha"
                            variant="outline"
                        >
                            Actions
                        </MenuButton>
                        <MenuList>
                            {auth.isLoggedIn &&
                                hasBookAccess(auth?.user?.role) && (
                                    <>
                                        <Link to={`/books/${id}/edit`}>
                                            <MenuItem>
                                                <EditIcon mr="2" /> Edit
                                            </MenuItem>
                                        </Link>
                                        {book.available && (
                                            <MenuItem onClick={onOpen}>
                                                <DeleteIcon mr="2" /> Delete
                                            </MenuItem>
                                        )}
                                    </>
                                )}
                            {book.available && (
                                <MenuItem
                                    onClick={() => {
                                        dispatch(borrowBook({ id }));
                                        dispatch(
                                            addBookToLibrary({
                                                bookId: book.id,
                                                userId: auth?.user?.id
                                            })
                                        );
                                    }}
                                >
                                    <PlusSquareIcon mr="2" /> Borrow
                                </MenuItem>
                            )}
                            {!book.available && isBookInLibrary() && (
                                <MenuItem
                                    onClick={() => {
                                        dispatch(
                                            removeBookFromLibrary({
                                                bookId: book.id,
                                                userId: auth?.user?.id
                                            })
                                        );
                                        dispatch(
                                            returnBook({
                                                id,
                                                lastBorrowedBy: auth?.user?.name
                                            })
                                        );
                                    }}
                                >
                                    <PlusSquareIcon mr="2" /> Return
                                </MenuItem>
                            )}
                            {!book.available &&
                            !hasBookAccess(auth?.user?.role) &&
                            !isBookInLibrary() ? (
                                <MenuItem isDisabled={true}>
                                    <NotAllowedIcon mr="2" />
                                    None
                                </MenuItem>
                            ) : null}
                        </MenuList>
                    </Menu>
                )}
            </Box>
            <Box maxW="inherit">
                <strong>Synopsis:</strong> {book.description}
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Danger</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to delete{" "}
                        <strong>{book.title}</strong>? This action is
                        irreversible!
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            mr={3}
                            onClick={() => {
                                dispatch(deleteBook({ id }));
                                navigate("/books");
                            }}
                        >
                            Delete
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    ) : (
        <></>
    );
};

export default Book;
