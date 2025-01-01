import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const signIn = createAsyncThunk(
    'users/signIn',  //アクションタイプ
    async (_, {getState, dispatch, rejectWithValue }) => {
        const state = getState()
        const isSigndIn = state.users.isSigndIn

        if (!isSigndIn) {
            const url = 'https://api.github.com/users/riku14'
                const response = await fetch(url);
                const data = await response.json();
                const username = data.login;
                
                return { uid: '00001', username }; // 成功時に返すデータ
        }
    }
)
