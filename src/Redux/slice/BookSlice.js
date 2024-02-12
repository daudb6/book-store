// slice/BookSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
    removeBook: (state, action) => {
      state.book = state.book.filter((v, i) => i !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
