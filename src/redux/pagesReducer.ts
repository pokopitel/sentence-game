import { createSlice } from "@reduxjs/toolkit";

export const pagesReducer = createSlice({
  name: "page",
  initialState: {
    page: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.id;
    },
    increase: (state) => {
      state.page = state.page + 1;
    },
    dicrease: (state) => {
      state.page = state.page - 1;
    },
  },
});

export const { setPage, increase, dicrease } = pagesReducer.actions;

export default pagesReducer.reducer;
