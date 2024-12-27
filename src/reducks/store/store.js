import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from '../users/signInSlice'
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import { connectRouter, routerMiddleware } from 'connected-react-router';


export const store = configureStore({
    reducer: {
        users: UsersReducer,
    },
});


// export default function createStore(history) {
//     // ミドルウェアの設定
//     const middlewares = [routerMiddleware(history), thunk];

//     // 開発環境でのloggerの追加
//     if (process.env.NODE_ENV === 'development') {
//         const logger = createLogger({
//             collapsed: true,
//             diff: true
//         });
//         middlewares.push(logger);
//     }

//     return configureStore({
//         reducer: {
//             router: connectRouter(history), // connected-react-router を使用
//             users: UsersReducer,
//         },
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
//     });
// }
