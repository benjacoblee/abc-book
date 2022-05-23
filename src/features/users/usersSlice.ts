import { createSlice, current } from "@reduxjs/toolkit";
import users from "../../app/data/users";

const initialState = users;

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        sortUsers(state, action) {
            switch (action.payload.sortType) {
                case "alphabetical": {
                    const sorted = state.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });

                    return action.payload.isReversed
                        ? sorted.reverse()
                        : sorted;
                }
                case "date_joined": {
                    const sorted = state.sort((a, b) => {
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
        }
    }
});

export const { sortUsers } = usersSlice.actions;
export default usersSlice.reducer;
