import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ProductTypeWithID } from "../../../schemas";

export type CartItem = ProductTypeWithID & { quantity: number };

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<ProductTypeWithID>) => {
      const product = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (product) {
        product.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action: PayloadAction<ProductTypeWithID>) => {
      const product = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (product) {
        product.quantity--;
        if (product.quantity === 0) {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<ProductTypeWithID>
    ) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
    updateQuantityByAmount: (
      state,
      action: PayloadAction<{ payload: ProductTypeWithID; amount: number }>
    ) => {
      const product = state.items.find(
        (item) => item._id === action.payload.payload._id
      );
      if (product) {
        product.quantity = action.payload.amount;
        if (product.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item._id !== action.payload.payload._id
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementQuantity,
  decrementQuantity,
  removeProductFromCart,
  updateQuantityByAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
