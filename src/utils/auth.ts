export const hasUserAccess = (role: string | undefined) => role === "admin";
export const hasBookAccess = (role: string) =>
    role === "admin" || role === "editor";

export const me = (id: string | undefined, idToDiff: string | undefined) =>
    id === idToDiff;
