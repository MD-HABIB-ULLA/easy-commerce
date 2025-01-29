import { Product } from "@/types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MyState {
  data: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: MyState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  const res = await fetch("/api/products");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
