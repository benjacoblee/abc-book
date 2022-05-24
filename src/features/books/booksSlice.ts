import { createSlice } from "@reduxjs/toolkit";
import books from "../../app/data/books";

const initialState = books;

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        sortbooks(state, action) {
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
        }
    }
});

export const { sortbooks } = booksSlice.actions;
export default booksSlice.reducer;
