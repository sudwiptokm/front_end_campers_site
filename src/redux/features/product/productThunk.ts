import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductTypeWithID } from "../../../schemas";

// Async thunks
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get<{ data: ProductTypeWithID[] }>(
      `${import.meta.env.VITE_API_URL}/api/products`
    );
    return response.data.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData: Omit<ProductTypeWithID, "_id">) => {
    const response = await axios.post<{ data: ProductTypeWithID }>(
      `${import.meta.env.VITE_API_URL}/api/products`,
      productData
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (productData: ProductTypeWithID) => {
    const response = await axios.put<{ data: ProductTypeWithID }>(
      `${import.meta.env.VITE_API_URL}/api/products/${productData._id}`,
      productData
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: string) => {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/products/${productId}`
    );
    return productId;
  }
);
