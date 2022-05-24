import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
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
                            colorScheme="red"
                            mr={3}
                            onClick={() => {
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
