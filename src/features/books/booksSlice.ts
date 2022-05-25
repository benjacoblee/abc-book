import { createSlice } from "@reduxjs/toolkit";
import books from "../../app/data/books";

const initialState = books;

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        sortBooks(_state, action) {
            switch (action.payload.sortType) {
                case "alphabetical": {
                    const sorted = [...initialState].sort((a, b) => {
                        return a.title.localeCompare(b.title);
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                case "date_joined": {
                    const sorted = [...initialState].sort((a, b) => {
                        const date = new Date(a.year_published).getTime();
                        const otherDate = new Date(b.year_published).getTime();
                        return date - otherDate;
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                default:
                    return initialState;
            }
        },
        fetchNormalizedBooksByGenre(_state, _action) {
            const checkIfGenreExists = (
                arr: any[],
                currGenre: string | undefined
            ) =>
                arr.findIndex(
                    (obj: { genre: string; count: number }) =>
                        obj.genre === currGenre
                );

            const newState = initialState.reduce((acc: any[], currVal) => {
                const { genre } = currVal;
                const indexOfGenre = checkIfGenreExists(acc, genre);
                let genreObj = {};
                if (genre && indexOfGenre === -1) {
                    genreObj = {
                        genre: currVal.genre,
                        count: 1
                    };
                    return [...acc, genreObj];
                } else if (genre) {
                    acc[indexOfGenre].count++;
                }
                return acc;
            }, []);

            return newState;
        },
        fetchNormalizedBooksByYearPublished(_state, _action) {
            const checkIfYearExists = (arr: any[], currYear: number) =>
                arr.findIndex(
                    (obj: { year_published: number; count: number }) =>
                        obj.year_published === currYear
                );

            const newState = initialState.reduce((acc: any[], currVal) => {
                const { year_published } = currVal;
                const indexOfYear = checkIfYearExists(
                    acc,
                    new Date(year_published).getFullYear()
                );
                let yearObj = {};
                if (year_published && indexOfYear === -1) {
                    yearObj = {
                        year_published: new Date(
                            currVal.year_published
                        ).getFullYear(),
                        count: 1
                    };
                    return [...acc, yearObj];
                } else if (year_published) {
                    acc[indexOfYear].count++;
                }
                return acc;
            }, []);

            return newState.sort((a, b) => a.year_published - b.year_published);
        }
    }
});

export const {
    sortBooks,
    fetchNormalizedBooksByGenre,
    fetchNormalizedBooksByYearPublished
} = booksSlice.actions;
export default booksSlice.reducer;
