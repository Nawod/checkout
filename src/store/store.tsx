import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
    // middleware: (getDefaultMiddleware)
    reducer: {
        productStates: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;