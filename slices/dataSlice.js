import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tilverkasNu: null,
  koksvecka: null,
  forsaljning: null,
  senastSalt: null,
  loading: false,
  sending: false,
  delivered: false,
  error: null,
};

export const fetchData = createAsyncThunk("getData", async () => {
  return axios.get("/api/data").then((res) => res.data);
});

export const updateData = createAsyncThunk("postData", async (data) => {
  return axios.post("/api/data", data).then((res) => res.data);
});

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.tilverkasNu = action.payload.tilverkasNu;
      state.koksvecka = action.payload.koksvecka;
      state.forsaljning = action.payload.forsaljning;
      state.senastSalt = action.payload.senastSalt;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.chats = null;
      state.error = action.error.message;
    });

    builder.addCase(updateData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
