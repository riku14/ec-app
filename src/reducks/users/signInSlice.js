import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./operations";

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user   = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error  = action.payload;
      })
  }
})

export const { logout } = signInSlice.actions
export default signInSlice.reducer