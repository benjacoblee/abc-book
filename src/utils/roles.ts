import { User } from "../types/User";

export const generateRoles = (users: User[]) =>
    users
        .reduce((acc: string[], { role }) => {
            if (!acc.includes(role)) {
                acc.push(role);
            }

            return acc;
        }, [])
        .sort();
