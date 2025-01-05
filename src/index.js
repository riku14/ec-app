import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import * as History from 'history';
import { store } from './reducks/store/store'; // redux-toolkitで作成したstoreをインポート
import './assets/reset.css'
import './assets/style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HelloJava from './testJava/HelloJava';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <HelloJava /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
