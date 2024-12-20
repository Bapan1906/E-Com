import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    // --> key -> (slice name) -> cart. Value -> this file name -> (cartSlice).
    cart: CartSlice.reducer,
  },
});
