import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getFeaturedProducts = createSelector(
  (state: RootState) => state.product,
  (products) => products.filter((product) => product.promotion === "featured")
);

export const getTopSellingProducts = createSelector(
  (state: RootState) => state.product,
  (products) =>
    products.filter((product) => product.promotion === "top_selling")
);

export const getIndividualProduct = createSelector(
  (state: RootState) => state.product,
  (_: any, id: string) => id,
  (products, id) => products.find((product) => product._id === id)
);

export const getTheMaximumPrice = createSelector(
  (state: RootState) => state.product,
  (products) => Math.max(...products.map((product) => product.price))
);
