import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from '../users/signInSlice'
import signUpReducer from "../users/signUpSlice";

export const store = configureStore({
    reducer: {
        users: UsersReducer,
        signUp: signUpReducer,
    },
});

