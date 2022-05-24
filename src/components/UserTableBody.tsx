import { Link, Tbody, Td, Tr } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { User } from "../types/User";
import { formatDateString } from "../utils/date";

const UserTableBody = ({
    id,
    name,
    role,
    date_joined,
    isLink
}: User & { isLink: boolean }) => {
    return (
        <Tbody>
            <Tr>
                <Td fontWeight="semibold">
                    {isLink ? (
                        <Link as={RouterLink} to={`/users/${id}`}>
                            {name}
                        </Link>
                    ) : (
                        name
                    )}
                </Td>
                <Td>{role}</Td>
                <Td>{formatDateString(date_joined)}</Td>
            </Tr>
        </Tbody>
    );
};

export default UserTableBody;
