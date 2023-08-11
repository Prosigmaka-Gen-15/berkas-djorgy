import React from "react";
import productsReducer, { productsFetch } from "../features/productsSlice.jsx";
import { productsApi } from "../features/productsApi.jsx";
import cartReducer from "../features/cartSlice.jsx";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.jsx";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export default store;
