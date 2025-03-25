import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

type ProductsLikedState = {
  productsLiked: number[];
};

const initialState: ProductsLikedState = {
  productsLiked: [],
};

const productsLikedSlice = createSlice({
  name: "productsLiked",
  initialState,
  reducers: {
    addLikedProduct: (state, action: PayloadAction<number>) => {
      state.productsLiked.push(action.payload);
    },
    removeLikedProduct: (state, action: PayloadAction<number>) => {
      state.productsLiked = state.productsLiked.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addLikedProduct, removeLikedProduct } =
  productsLikedSlice.actions;
export default productsLikedSlice.reducer;
