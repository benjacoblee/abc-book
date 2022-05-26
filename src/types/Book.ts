export type Book = {
    id: string;
    title: string;
    description: string;
    genre?: string | undefined;
    author: string;
    year_published: string;
    available: boolean;
    last_borrower?: string | null;
};

export type BookGenreCount = {
    genre?: string;
    count?: number;
};

export type BookYearCount = {
    year_published?: number;
    count?: number;
};
