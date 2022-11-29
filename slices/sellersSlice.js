import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sellers: null,
  loading: false,
  sending: false,
  delivered: false,
  error: null,
};

export const fetchSellers = createAsyncThunk("fetchSellers", async () => {
  return axios.get("/api/sellers").then((res) => res.data);
});

export const sellersSlice = createSlice({
  name: "sellersSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSellers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellers.fulfilled, (state, action) => {
      state.loading = false;
      state.sellers = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSellers.rejected, (state, action) => {
      state.loading = false;
      state.chats = null;
      state.error = action.error.message;
    });
  },
});

export default sellersSlice.reducer;
