import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CartItem } from "./cartSlice";

export const selectTotalQuantity = createSelector(
  (state: { cart: { items: CartItem[] } }) => state.cart.items,
  (items) => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalAmount = createSelector(
  (state: { cart: { items: CartItem[] } }) => state.cart.items,
  (items) => items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectAvailableToAddInCart = createSelector(
  (state: RootState) => state.cart.items,
  (items) => (id: string) => {
    const product = items.find((item) => item._id === id);
    if (!product) return true;
    return product
      ? product.stock - product.quantity > 0
        ? true
        : false
      : false;
  }
);
