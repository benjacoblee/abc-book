import { createSlice } from "@reduxjs/toolkit";
import users from "../../app/data/users";
import { User } from "../../types/User";

const initialState: User[] = users;

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        sortUsers(state, action) {
            switch (action.payload.sortType) {
                case "alphabetical": {
                    const sorted = [...state].sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                case "date_joined": {
                    const sorted = [...state].sort((a, b) => {
                        const date = new Date(a.date_joined).getTime();
                        const otherDate = new Date(b.date_joined).getTime();
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
        editUser(state, action) {
            const newState = [...state].reduce(
                (acc: User[], currVal, currIdx) => {
                    if (currVal.id === action.payload.id) {
                        acc[currIdx] = action.payload;
                    }
                    return acc;
                },
                state
            );

            return newState;
        },
        deleteUser(state, action) {
            return [...state].filter((user) => {
                return user.id !== action.payload.id;
            });
        },
        addBookToLibrary(state, action) {
            return [...state].reduce((acc, currVal, currIdx) => {
                if (currVal.id === action.payload.userId) {
                    if (acc[currIdx].books)
                        acc[currIdx].books?.push(action.payload.bookId);
                    else {
                        acc[currIdx].books = [action.payload.bookId];
                    }
                }
                return acc;
            }, state);
        },
        removeBookFromLibrary(state, action) {
            return [...state].reduce((acc, currVal, currIdx) => {
                if (currVal.id === action.payload.userId) {
                    acc[currIdx].books = acc[currIdx].books?.filter(
                        (bookId) => bookId !== action.payload.bookId
                    );
                }
                return acc;
            }, state);
        }
    }
});

export const {
    sortUsers,
    editUser,
    deleteUser,
    addBookToLibrary,
    removeBookFromLibrary
} = usersSlice.actions;
export default usersSlice.reducer;
