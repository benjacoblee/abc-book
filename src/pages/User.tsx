import {
    Container,
    Table,
    TableContainer,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import UserTableBody from "../components/UserTableBody";

const User = () => {
    const params = useParams();
    const { id } = params;

    const users = useSelector((state: RootState) => state.users);
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
        </Container>
    ) : (
        <></>
    );
};

export default User;
