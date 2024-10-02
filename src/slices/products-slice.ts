import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeStoreInstance } from "../services";
import { IProductSlice } from "../types";

const initialState: IProductSlice = {
  status: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = {
          code: action.error.code,
          message: action.error.message ?? "Something Just Explode",
        };
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      });
  },
});

export const getProducts = createAsyncThunk(
  "get/product",
  async (url?: string) => {
    const res = await fakeStoreInstance.get(url ?? "/");
    return res.data;
  },
);

export default productSlice.reducer;
