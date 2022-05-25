import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { deleteBook } from "../features/books/booksSlice";
import { hasBookAccess } from "../utils/auth";

const Book = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const books = useSelector((state: RootState) => state.books);
    const auth = useSelector((state: RootState) => state.auth);
    const book = books.find((book) => book.id === id);

    return book ? (
        <Container maxW="fit-content">
            <TableContainer mb={4}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Genre</Th>
                            <Th>Author</Th>
                            <Th>Year Published</Th>
                            <Th>Availability</Th>
                        </Tr>
                    </Thead>
                    <BookTableBody {...book} isLink={false} />
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="flex-end" mb="4">
                {auth.isLoggedIn && hasBookAccess(auth?.user?.role) && (
                    <Menu>
                        <MenuButton
                            as={Button}
                            colorScheme="blackAlpha"
                            variant="outline"
                        >
                            Actions
                        </MenuButton>
                        <MenuList>
                            <Link to={`/books/${id}/add`}>
                                <MenuItem>
                                    <EditIcon mr="2" /> Add
                                </MenuItem>
                            </Link>
                            <Link to={`/books/${id}/edit`}>
                                <MenuItem>
                                    <EditIcon mr="2" /> Edit
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={onOpen}>
                                <DeleteIcon mr="2" /> Delete
                            </MenuItem>
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
                            colorScheme="red"
                            mr={3}
                            onClick={() => {
                                dispatch(deleteBook({ id: book.id }));
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
