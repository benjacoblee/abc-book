import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Container,
    List,
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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import UserTableBody from "../components/UserTableBody";
import { sortUsers } from "../features/users/usersSlice";
import { generateSelectItems } from "../utils/roles";
import { renderItemPageNumbers } from "./utils/pagination";

const Users = () => {
    const [page, setPage] = useState(1);
    const [alphabetReversed, setIsAlphabetReversed] = useState(false);
    const [dateJoinedReversed, setIsDateJoinedReversed] = useState(false);
    const [filter, setFilter] = useState<null | string>(null);
    const users = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleFilterClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setPage(1);
        const target = e.target as HTMLButtonElement;
        setFilter(target.getAttribute("value"));
    };

    const renderRoles = () => {
        const roles = generateSelectItems(users, "role");

        return roles.map((role) => (
            <MenuItem key={role} value={role} onClick={handleFilterClick}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
            </MenuItem>
        ));
    };

    return (
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
                    navigate("/");
                }}
                color="teal.400"
            >
                <ArrowBackIcon mr="2" /> Back to home
            </Box>
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
                    {currentUsers.map((user) => (
                        <UserTableBody key={user.id} {...user} isLink={true} />
                    ))}
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
            <List display="flex">
                {renderItemPageNumbers({
                    filter,
                    items: users,
                    itemsPerPage: usersPerPage,
                    handlePageClick,
                    page,
                    objKey: "role"
                })}
            </List>
        </Container>
    );
};

export default Users;
