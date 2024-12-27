import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    reducers: {
        signUp: (state) => {

        }
    }
 
    }
)

export const {signUp} = signUpSlice.actions;
export default signUpSlice.reducer;