import { createSelector } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

export const selectTotalQuantity = createSelector(
  (state: { cart: { items: CartItem[] } }) => state.cart.items,
  (items) => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalAmount = createSelector(
  (state: { cart: { items: CartItem[] } }) => state.cart.items,
  (items) => items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
