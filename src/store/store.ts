import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productsLikedReducer from "./slices/productsLikedSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsLiked: productsLikedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
