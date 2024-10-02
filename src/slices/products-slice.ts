import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProductSlice } from '../types';
import { fakeStoreInstance } from '../services';

const initialState: IProductSlice = {
  status: 'idle',
  products: []
};

const productSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload;
      });
  }
});

export const getProducts = createAsyncThunk(
  'get/product',
  async (url?: string) => {
    const data = (await fakeStoreInstance.get(url ?? '/')).data;
    return data;
  }
);

export default productSlice.reducer;
