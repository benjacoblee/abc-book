import { Book } from "../types/Book";

export const normalizeBooksByGenre = (books: Book[]) => {
    const checkIfGenreExists = (arr: any[], currGenre: string | undefined) =>
        arr.findIndex(
            (obj: { genre: string; count: number }) => obj.genre === currGenre
        );

    const newState = books.reduce((acc: any[], currVal: any) => {
        const { genre } = currVal;
        const indexOfGenre = checkIfGenreExists(acc, genre || "Uncategorized");
        let genreObj = {};
        if (indexOfGenre === -1) {
            genreObj = {
                genre: currVal.genre || "Uncategorized",
                count: 1
            };
            return [...acc, genreObj];
        } else {
            acc[indexOfGenre].count++;
        }
        return acc;
    }, []);

    return newState;
};

export const normalizeBooksByYearPublished = (books: Book[]) => {
    const checkIfYearExists = (arr: any[], currYear: number) =>
        arr.findIndex(
            (obj: { year_published: number; count: number }) =>
                obj.year_published === currYear
        );

    const newState = books.reduce((acc: any[], currVal: any) => {
        const { year_published } = currVal;
        const indexOfYear = checkIfYearExists(
            acc,
            new Date(year_published).getFullYear()
        );
        let yearObj = {};
        if (year_published && indexOfYear === -1) {
            yearObj = {
                year_published: new Date(currVal.year_published).getFullYear(),
                count: 1
            };
            return [...acc, yearObj];
        } else if (year_published) {
            acc[indexOfYear].count++;
        }
        return acc;
    }, []);

    return newState.sort(
        (a: any, b: any) => a.year_published - b.year_published
    );
};
