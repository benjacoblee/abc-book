import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";
import booksReducer from "../features/books/booksSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        books: booksReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
