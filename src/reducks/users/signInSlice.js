import { createSlice } from "@reduxjs/toolkit";

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
      signIn: (state, action) => {
        state.isSignIn = true;
        state.uid = action.payload.uid;
        state.username = action.payload.username;
      },
      signOut: (state) => {
        state.isSignIn = false;
        state.uid = "";
        state.username = "";
      }
    }
  });
  
  // アクションのエクスポート
  export const { signIn, signOut } = usersSlice.actions;
  
  // リデューサーのエクスポート
  export default usersSlice.reducer;