import { Box, Button, Container, Input } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState, store } from "../app/store";
import { addBook, editBook } from "../features/books/booksSlice";
import { hasBookAccess } from "../utils/auth";

const BookForm = (props: any) => {
    const auth = useSelector((state: RootState) => state.auth);
    const [bookDetails, setBookDetails] = useState({
        ...props
    });
    const [date, setDate] = useState<undefined | Date>();
    const books = store.getState().books;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!auth.isLoggedIn || !hasBookAccess(auth?.user?.role)) navigate("/");
    }, [auth.isLoggedIn, auth?.user?.role, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setBookDetails({
            ...bookDetails,
            [target.name]: target.value
        });
    };

    const handleDateChange = (date: Date) => {
        setDate(date);
    };

    const handleSubmit = () => {
        if (auth.isLoggedIn && hasBookAccess(auth?.user?.role)) {
            if (location.pathname.includes("/new")) {
                dispatch(
                    addBook({
                        ...bookDetails,
                        year_published: date && date.toISOString()
                    })
                );
                return navigate(`/books/${books[books.length - 1].id}`);
            } else if (location.pathname.includes("/edit")) {
                dispatch(
                    editBook({
                        ...bookDetails,
                        year_published: date && date.toISOString()
                    })
                );
            }
        }
        navigate("/books");
    };

    const { title, description, genre, author, year_published } = bookDetails;

    return (
        <Container centerContent={true} mt="24">
            <Input
                placeholder="Title"
                mb="4"
                name="title"
                onChange={handleInputChange}
                value={title || ""}
            />
            <Input
                mb={4}
                pr="4.5rem"
                placeholder="Description"
                name="description"
                onChange={handleInputChange}
                value={description || ""}
            />
            <Input
                placeholder="Genre"
                mb="4"
                name="genre"
                onChange={handleInputChange}
                value={genre || ""}
            />
            <Input
                placeholder="Author"
                mb="4"
                name="author"
                onChange={handleInputChange}
                value={author || ""}
            />
            {props.year_published ? (
                <SingleDatepicker
                    name="year_published"
                    date={date || new Date(year_published)}
                    onDateChange={handleDateChange}
                />
            ) : (
                <SingleDatepicker
                    name="year_published"
                    date={date || new Date()}
                    onDateChange={handleDateChange}
                />
            )}
            <Box
                mt="4"
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
                flexDir="column"
                width="full"
            >
                <Button
                    width="full"
                    onClick={handleSubmit}
                    disabled={
                        !title || !description || !genre || !author || !date
                    }
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default BookForm;
