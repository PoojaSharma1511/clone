import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import amaReducer from './amaSlice'
import productReducer from "./productSlice";

const store = configureStore({
    reducer: {
        cart : cartReducer,
        product : productReducer,
        ama : amaReducer,
    }
})

export default store