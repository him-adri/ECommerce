import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./Context/ProductContext";
import { HeaderContextProvider } from "./Context/HeaderContext";
import { Provider } from "react-redux";
import Store from './Reducer/Store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <HeaderContextProvider>
        <BrowserRouter>
          <Provider store={Store}>
            <App />
          </Provider>
        </BrowserRouter>
      </HeaderContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
