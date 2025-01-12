import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const signIn = () => {
//     return async (dispatch, getState) => {
//         const state = getState()
//         const isSigndIn = state.users.isSigndIn

//         if (!isSigndIn) {
//             const url = 'https://api.github.com/users/riku14'

//             const response = await fetch(url)
//                                 .then(res => res.json())
//                                 .catch(() => null)

//             const username = response.login

//             dispatch(signInAction({
//                 isSigndIn: true,
//                 uid: "00001",
//                 username: username
//             }))
//         }
//     }
// }

// signIn　API
export const signIn = createAsyncThunk (
    'users/signIn',
    async({email, password}, {rejectWithValue}) => {
        try{
            const response = await axios.post("http://localhost:8080/api/users/signin", {email, password})
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data || '認証エラー')
        }
    }
)

// ユーザー登録API
export const signUp = createAsyncThunk(
    'users/signUp',
    async({username, email, password}, {rejectWithValue}) =>{
        try{
            const response = await axios.post("http://localhost:8080/api/users/signup", {username, email, password})
            return response.data;
        }   catch(error) {
            return rejectWithValue(error.response.data)
        }
    })
