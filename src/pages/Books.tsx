import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Container,
    Link,
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
import { Link as NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import BookTableBody from "../components/BookTableBody";
import { sortBooks } from "../features/books/booksSlice";
import { hasBookAccess } from "../utils/auth";
import { renderItemPageNumbers } from "./utils/pagination";

const Books = () => {
    const [page, setPage] = useState(1);
    const [alphabetReversed, setIsAlphabetReversed] = useState(false);
    const [dateJoinedReversed, setIsDateJoinedReversed] = useState(false);
    const [filter, setFilter] = useState<null | boolean>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth);
    const books = useSelector((state: RootState) => state.books);

    const booksPerPage = 10;
    const indexOfLastBook = page * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks =
        filter !== null
            ? books
                  .filter((book) => book.available === Boolean(filter))
                  .slice(indexOfFirstBook, indexOfLastBook)
            : books.slice(indexOfFirstBook, indexOfLastBook);

    const handleSortClick = (sortType: string, isReversed: boolean) => {
        setPage(1);
        dispatch(sortBooks({ sortType, isReversed }));
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
        const filter = target.getAttribute("value") === "true" ? true : false;
        setFilter(filter);
    };

    const renderMenuItems = () => {
        const menuItems = ["Available", "Unavailable"];

        return menuItems.map((item) => (
            <MenuItem
                key={item}
                value={
                    item === "Available" ? true.toString() : false.toString()
                }
                onClick={handleFilterClick}
            >
                {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
        ));
    };

    return (
        <Container maxW="fit-content">
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
                                Title <ArrowDownIcon />
                            </Th>
                            <Th>Role</Th>
                            <Th>Author</Th>
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
                                Year Published <ArrowDownIcon />
                            </Th>
                            <Th>Availability</Th>
                            <Th>Last Borrowed By</Th>
                        </Tr>
                    </Thead>
                    {currentBooks.map((book) => (
                        <BookTableBody key={book.id} {...book} isLink={true} />
                    ))}
                </Table>
            </TableContainer>
            <Container
                maxW="-moz-fit-content"
                display="flex"
                justifyContent="flex-end"
            >
                <Menu>
                    <MenuButton
                        as={Button}
                        colorScheme="blackAlpha"
                        variant="outline"
                    >
                        Filter by availability
                    </MenuButton>
                    {auth.isLoggedIn && hasBookAccess(auth?.user?.role) && (
                        <Link
                            as={NavLink}
                            to={`/books/new`}
                            _hover={{
                                textDecoration: "none"
                            }}
                        >
                            <MenuButton
                                marginLeft="2"
                                as={Button}
                                colorScheme="teal"
                            >
                                Add Book
                            </MenuButton>
                        </Link>
                    )}
                    <MenuList>
                        <MenuItem
                            onClick={() => {
                                setFilter(null);
                                setPage(1);
                            }}
                        >
                            View All
                        </MenuItem>
                        {renderMenuItems()}
                    </MenuList>
                </Menu>
            </Container>
            <List display="flex" justifyContent="center">
                {renderItemPageNumbers({
                    filter,
                    items: books,
                    itemsPerPage: booksPerPage,
                    handlePageClick,
                    page,
                    objKey: "available"
                })}
            </List>
        </Container>
    );
};

export default Books;
