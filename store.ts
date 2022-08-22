import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/stylesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RoootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
