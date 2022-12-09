import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sections: null,
  loading: false,
  sending: false,
  delivered: false,
  error: null,
};

export const fetchAsana = createAsyncThunk("fetchAsana", async () => {
  return axios.get("/api/asana").then((res) => res.data);
});

export const asanaSlice = createSlice({
  name: "asanaSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsana.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsana.fulfilled, (state, action) => {
      state.loading = false;
      state.sections = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAsana.rejected, (state, action) => {
      state.loading = false;
      state.sections = null;
      state.error = action.error.message;
    });
  },
});

export default asanaSlice.reducer;
