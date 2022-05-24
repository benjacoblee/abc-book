import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Button,
    Container,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Table,
    TableContainer,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import UserTableBody from "../components/UserTableBody";

const User = () => {
    const params = useParams();
    const { id } = params;

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
                            <MenuItem>
                                <DeleteIcon mr="2" /> Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>
                )}
            </Container>
        </Container>
    ) : (
        <></>
    );
};

export default User;
