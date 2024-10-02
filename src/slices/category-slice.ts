import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fakeStoreInstance } from '../services';
import { ICategorySlice } from '../types';

const initialState: ICategorySlice = {
  categories: [],
  status: 'idle'
};

const productSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'success';
        state.categories = action.payload;
      });
  }
});

export const getCategories = createAsyncThunk(
  'get/categories',
  async (url?: string) => {
    const data = (await fakeStoreInstance.get(url ?? '/')).data;
    return data;
  }
);

export default productSlice.reducer;
