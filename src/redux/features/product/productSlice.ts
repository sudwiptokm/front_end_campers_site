import { createSlice } from "@reduxjs/toolkit";
import { ProductTypeWithID } from "../../../schemas";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "./productThunk";
// Slice
const productSlice = createSlice({
  name: "product",
  initialState: [] as ProductTypeWithID[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload.data);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.findIndex(
          (product) => product._id === action.payload.data._id
        );
        if (index !== -1) {
          state[index] = action.payload.data;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
