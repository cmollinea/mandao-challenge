import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDetails } from '../types';
import { fakeStoreInstance } from '../services';

const initialState: IDetails = {
  status: 'idle'
};

const DetailsSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getDetails.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.status = 'success';
        state.details = action.payload;
      });
  }
});

export const getDetails = createAsyncThunk(
  'get/details',
  async (id?: string) => {
    const data = (await fakeStoreInstance.get(`/products/${id}`)).data;
    return data;
  }
);

export default DetailsSlice.reducer;
