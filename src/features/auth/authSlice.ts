import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

type InitialState = {
    errors: string[];
    isLoggedIn?: boolean;
    user?: User;
};

const initialState: InitialState = {
    errors: [],
    isLoggedIn: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        verifyLogin(state, action) {
            const { users, loginCredentials } = action.payload;
            const user = users.find(
                (user: User) => user.name === loginCredentials.username
            );

            if (!user) {
                return {
                    ...state,
                    errors: [...state.errors, "User not found"]
                };
            } else if (user) {
                if (user.password !== loginCredentials.password) {
                    return {
                        ...state,
                        errors: [...state.errors, "Wrong credentials"]
                    };
                }
                const newState = { ...user };
                delete newState.password;
                sessionStorage.setItem("me", JSON.stringify({ ...newState }));
                return { ...state, isLoggedIn: true, user };
            }
        },
        logout(state, _action) {
            return { ...state, isLoggedIn: false };
        }
    }
});

export const { verifyLogin, logout } = authSlice.actions;
export default authSlice.reducer;
