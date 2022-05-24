import { Link, Tbody, Td, Tr } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Book } from "../types/Book";
import { formatYearString } from "../utils/date";

const BookTableBody = ({
    id,
    title,
    genre,
    author,
    year_published,
    available,
    last_borrower,
    isLink
}: Book & { isLink: boolean }) => {
    return (
        <Tbody>
            <Tr>
                <Td fontWeight="semibold">
                    {isLink ? (
                        <Link as={RouterLink} to={`/users/${id}`}>
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </Td>
                <Td>{genre}</Td>
                <Td>{author}</Td>
                <Td>{formatYearString(year_published)}</Td>
                <Td>{available ? "Available" : "Unavailable"}</Td>
                <Td>{last_borrower && last_borrower}</Td>
            </Tr>
        </Tbody>
    );
};

export default BookTableBody;
