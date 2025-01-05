import { createSlice } from "@reduxjs/toolkit"
import { signUp } from "./operations";

const initialState = {
    user: null,
    status: 'idle',
    error: null,
}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = 'idle';
            state.error  = null; 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user   = action.payload; 
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error  = action.payload;
            })
    }
})

export const { resetStatus } = signUpSlice.actions
export default signUpSlice.reducer