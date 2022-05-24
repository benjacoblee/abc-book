import { ListItem } from "@chakra-ui/react";
import { User } from "../../types/User";

export const renderPageNumbers = (options: {
    filter: string | null;
    users: User[];
    usersPerPage: number;
    handlePageClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    page: number;
}) => {
    const { filter, users, usersPerPage, handlePageClick, page } = options;
    const numberOfUsers = filter
        ? users.filter((user) => user.role === filter).length
        : users.length;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(numberOfUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return pageNumbers.map((number) => {
        return (
            <ListItem
                key={number}
                id={number.toString()}
                onClick={(e) => handlePageClick(e)}
                _hover={{
                    cursor: "pointer"
                }}
                mr={4}
            >
                {number === page ? (
                    <strong onClick={(e) => e.stopPropagation()}>
                        {number}
                    </strong>
                ) : (
                    number
                )}
            </ListItem>
        );
    });
};
