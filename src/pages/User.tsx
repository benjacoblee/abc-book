import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import UserTableBody from "../components/UserTableBody";
import { deleteUser } from "../features/users/usersSlice";
import { hasUserAccess } from "../utils/auth";

const User = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector((state: RootState) => state.users);
    const auth = useSelector((state: RootState) => state.auth);
    const user = users.find((user) => user.id === id);

    return user ? (
        <Container centerContent={true}>
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
                    navigate("/users");
                }}
                color="teal.400"
            >
                <ArrowBackIcon mr="2" /> Back to users
            </Box>
            <TableContainer mb={4}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Role</Th>
                            <Th>Date Joined</Th>
                        </Tr>
                    </Thead>
                    <UserTableBody {...user} isLink={false} />
                </Table>
            </TableContainer>
            <Container display="flex" justifyContent="flex-end">
                {auth.isLoggedIn && hasUserAccess(auth?.user?.role) && (
                    <Menu>
                        <MenuButton
                            as={Button}
                            colorScheme="blackAlpha"
                            variant="outline"
                        >
                            Actions
                        </MenuButton>
                        <MenuList>
                            <Link to={`/users/${id}/edit`}>
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
            </Container>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Danger</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to delete{" "}
                        <strong>{user.name}</strong>? This action is
                        irreversible!
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            mr={3}
                            onClick={() => {
                                auth.isLoggedIn &&
                                    hasUserAccess(auth?.user?.role) &&
                                    dispatch(deleteUser({ id: user.id }));
                                navigate("/users");
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

export default User;
