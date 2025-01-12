import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../users/signUpSlice";
import signInReducer from "../users/signInSlice";

export const store = configureStore({
    reducer: {
        signUp: signUpReducer,
        signIn: signInReducer,
    },
});

