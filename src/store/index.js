import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;