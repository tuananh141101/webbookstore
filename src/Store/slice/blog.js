import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: ["blog"], // Assuming you want an array of blogs (plural)
  loading: false,
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {}, // You can add reducers here to handle actions that modify the state
});

export default blogSlice.reducer;
