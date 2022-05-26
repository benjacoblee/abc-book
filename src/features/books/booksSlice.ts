import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import books from "../../app/data/books";

const initialState = books;

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        sortBooks(state, action) {
            switch (action.payload.sortType) {
                case "alphabetical": {
                    const sorted = [...state].sort((a, b) => {
                        return a.title.localeCompare(b.title);
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                case "date_joined": {
                    const sorted = [...state].sort((a, b) => {
                        const date = new Date(a.year_published).getTime();
                        const otherDate = new Date(b.year_published).getTime();
                        return date - otherDate;
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                default:
                    return state;
            }
        },
        addBook(state, action) {
            const book = {
                id: uuidv4(),
                ...action.payload,
                available: true,
                last_borrower: null
            };
            return [...state, book];
        },
        editBook(state, action) {
            return [...state].reduce((acc, currVal, currIdx) => {
                if (currVal.id === action.payload.id) {
                    acc[currIdx] = action.payload;
                }
                return acc;
            }, state);
        },
        deleteBook(state, action) {
            return [...state].filter((book) => {
                return book.id !== action.payload.id;
            });
        },
        borrowBook(state, action) {
            return [...state].reduce((acc, currVal, currIdx) => {
                if (currVal.id === action.payload.id) {
                    acc[currIdx].available = false;
                }
                return acc;
            }, state);
        },
        returnBook(state, action) {
            return [...state].reduce((acc, currVal, currIdx) => {
                if (currVal.id === action.payload.id) {
                    acc[currIdx].available = true;
                    acc[currIdx].last_borrower = action.payload.lastBorrowedBy;
                }
                return acc;
            }, state);
        }
    }
});

export const {
    sortBooks,
    addBook,
    editBook,
    deleteBook,
    borrowBook,
    returnBook
} = booksSlice.actions;
export default booksSlice.reducer;
