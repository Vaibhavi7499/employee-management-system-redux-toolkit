import { configureStore } from "@reduxjs/toolkit";
import EmpSlice from "./Slice/EmpSlice";

export const store = configureStore({
  reducer: {
    employee: EmpSlice,
  },
});