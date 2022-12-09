import { configureStore } from "@reduxjs/toolkit";
import sellersReducer from "./slices/sellersSlice";
import dataReducer from "./slices/dataSlice";
import asanaReducer from "./slices/asanaSlice";

export const store = configureStore({
  reducer: {
    sellers: sellersReducer,
    data: dataReducer,
    asana: asanaReducer,
  },
});
