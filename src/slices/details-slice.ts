import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeStoreInstance } from "../services";
import { IDetails } from "../types";

class FakeApiProductNotFound extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

const initialState: IDetails = {
  status: "idle",
};

const DetailsSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.status = "error";
        state.error = {
          code: action.error.code,
          message: action.error.message ?? "Something Just Explode",
        };
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.details = action.payload;
      });
  },
});

export const getDetails = createAsyncThunk(
  "get/details",
  async (id?: string) => {
    const res = await fakeStoreInstance.get(`/products/${id}`);
    if (!res.data) {
      throw new FakeApiProductNotFound("NOT_FOUND", "Product Not Found");
    }
    return res.data;
  },
);

export const { reset } = DetailsSlice.actions;

export default DetailsSlice.reducer;
