import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create and configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
