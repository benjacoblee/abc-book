export type Book = {
    id: string;
    title: string;
    description: string;
    genre?: string | undefined;
    author: string;
    year_published: string;
    available: boolean;
    last_borrower: string | null;
};
