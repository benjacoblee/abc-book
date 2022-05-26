import { Book, BookGenreCount, BookYearCount } from "../types/Book";

export const normalizeBooksByGenre = (books: Book[]) => {
    const checkIfGenreExists = (
        arr: BookGenreCount[],
        currGenre: string | undefined
    ) => arr.findIndex((obj: BookGenreCount) => obj.genre === currGenre);

    const normalizedBooks = books.reduce((acc: any[], currVal: Book) => {
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

    return normalizedBooks;
};

export const normalizeBooksByYearPublished = (books: Book[]) => {
    const checkIfYearExists = (arr: BookYearCount[], currYear: number) =>
        arr.findIndex((obj: BookYearCount) => obj.year_published === currYear);

    const normalizedBooks = books.reduce((acc: any[], currVal: Book) => {
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

    return normalizedBooks.sort(
        (a: any, b: any) => a.year_published - b.year_published
    );
};
