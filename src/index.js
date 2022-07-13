import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import store from './store'
import setAuthorizationToken  from './authorization/authorization'
import { LOGIN_SUCCESS } from './store/modules/auth/authTypes';
import { ApolloProvider } from "@apollo/client";
import Client from "./apolloClient";


if (localStorage.token){
  setAuthorizationToken(localStorage.token) 
  let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'))
  store.dispatch({ type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token 
}

ReactDOM.render(
  <ApolloProvider client={Client}>
  <Provider store={store}>
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </StyledEngineProvider>
  </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();
