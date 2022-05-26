import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import BookForm from "../components/BookForm";
import { Book } from "../types/Book";

const EditBook = () => {
    const books = useSelector((state: RootState) => state.books);
    const params = useParams();
    const { id } = params;
    const book = books.find((book: Book) => book.id === id);
    return book ? <BookForm {...book} /> : null;
};

export default EditBook;
