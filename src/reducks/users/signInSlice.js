import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./operations";

const initialState = {
    user: {
      isSignIn: false,
      uid: "",
      username: ""
    },
  };

  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      // signInAction: (state, action) => {
      //   state.isSignIn = true;
      //   state.uid = action.payload.uid;
      //   state.username = action.payload.username;
      // },
      signOutAction: (state) => {
        state.isSignIn = false;
        state.uid = "";
        state.username = "";
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signIn.fulfilled, (state, action) => {
          state.isSignIn = true;
          state.uid = action.payload.uid;
          state.username = action.payload.username;
          state.error = null;
        })
        .addCase(signIn.rejected, (state, action) => {
          state.error = action.payload;
        });
      }
  });

  
  
  // アクションのエクスポート
  export const { signInAction, signOutAction } = usersSlice.actions;
  
  // リデューサーのエクスポート
  export default usersSlice.reducer;