import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { load, save } from "redux-localstorage-simple";
import thunk from "redux-thunk";
import "~/assets/scss/style.scss";
import App from "./App";
import products from "./data/products.json";
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
import "boxicons";

const store = createStore(rootReducer, load(), applyMiddleware(thunk, save()));

store.dispatch(fetchProducts(products));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
