import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pagesReducer";
import slicesReducer from "./slicesReducer";

export const store = configureStore({
  reducer: {
    questions: slicesReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;