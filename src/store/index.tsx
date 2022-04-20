import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./queryReducer";

const store = configureStore({
  reducer: {
    query: queryReducer
  }
});

export type TRootState = ReturnType<typeof store.getState>
export default store