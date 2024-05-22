import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./features/imageSlice";
import authSlice from "./features/authSlice";
import postSlice from "./features/PostSlice";
import ProductSlice from "./features/ProductSlice";
import CartSlice from "./features/CartSlice";


const store = configureStore({
  reducer: {
    imageSlice,
    authSlice,
    ProductSlice,
    postSlice,
    CartSlice
  },
});
export default store;

