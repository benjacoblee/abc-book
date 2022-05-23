import { ArrowDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Container,
    Link,
    List,
    ListItem,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { RootState } from "../app/store";
import { sortUsers } from "../features/users/usersSlice";

type User = {
    id: string;
    name: string;
    password: string;
    role: string;
    date_joined: Date;
};

const Users = () => {
    const [page, setPage] = useState(1);
    const [alphabetReversed, setIsAlphabetReversed] = useState(false);
    const [dateJoinedReversed, setIsDateJoinedReversed] = useState(false);
    const [filter, setFilter] = useState(null);
    const users = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();

    const usersPerPage = 5;
    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filter
        ? users
              .filter((user) => user.role === filter)
              .slice(indexOfFirstUser, indexOfLastUser)
        : users.slice(indexOfFirstUser, indexOfLastUser);

    const handleSortClick = (sortType: string, isReversed: boolean) => {
        setPage(1);
        dispatch(sortUsers({ sortType, isReversed }));
    };

    const handlePageClick = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        const target = e.target as HTMLLIElement;
        setPage(Number(target.getAttribute("id")));
    };

    const handleFilterClick = (e: any) => {
        setPage(1);
        setFilter(e.target.getAttribute("value"));
    };

    const renderRoles = () => {
        const roles = users
            .reduce((acc: string[], { role }) => {
                if (!acc.includes(role)) {
                    acc.push(role);
                }

                return acc;
            }, [])
            .sort();

        return roles.map((role) => (
            <MenuItem key={role} value={role} onClick={handleFilterClick}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
            </MenuItem>
        ));
    };

    const renderPageNumbers = () => {
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
    return (
        <Container centerContent={true}>
            <TableContainer mb={4}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th
                                _hover={{
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    handleSortClick(
                                        "alphabetical",
                                        alphabetReversed
                                    );
                                    setIsDateJoinedReversed(false);
                                    setIsAlphabetReversed(!alphabetReversed);
                                }}
                            >
                                Name <ArrowDownIcon />
                            </Th>
                            <Th>Role</Th>
                            <Th
                                _hover={{
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    handleSortClick(
                                        "date_joined",
                                        dateJoinedReversed
                                    );
                                    setIsAlphabetReversed(false);
                                    setIsDateJoinedReversed(
                                        !dateJoinedReversed
                                    );
                                }}
                            >
                                Date Joined <ArrowDownIcon />
                            </Th>
                        </Tr>
                    </Thead>
                    {currentUsers.map(({ id, name, role, date_joined }) => {
                        return (
                            <Tbody key={id}>
                                <Tr>
                                    <Td>
                                        <Link
                                            as={RouterLink}
                                            to={`/users/${id}`}
                                        >
                                            {name}
                                        </Link>
                                    </Td>
                                    <Td>{role}</Td>
                                    <Td>
                                        {new Date(
                                            date_joined
                                        ).toLocaleDateString("en-SG")}
                                    </Td>
                                </Tr>
                            </Tbody>
                        );
                    })}
                </Table>
            </TableContainer>
            <Container display="flex" justifyContent="flex-end">
                <Menu>
                    <MenuButton
                        as={Button}
                        colorScheme="blackAlpha"
                        variant="outline"
                    >
                        Filter by role
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => {
                                setFilter(null);
                                setPage(1);
                            }}
                        >
                            View All
                        </MenuItem>
                        {renderRoles()}
                    </MenuList>
                </Menu>
            </Container>
            <List display="flex">{renderPageNumbers()}</List>
        </Container>
    );
};

export default Users;
