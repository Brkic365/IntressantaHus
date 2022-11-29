import { configureStore } from "@reduxjs/toolkit";
import sellersReducer from "./slices/sellersSlice";
import dataReducer from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    sellers: sellersReducer,
    data: dataReducer,
  },
});
