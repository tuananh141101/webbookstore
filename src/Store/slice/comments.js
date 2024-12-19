import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchListComments",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/comments");
    return res.data;
  }
);

const initialState = {
  listComments: [],
};
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.listComments = action.payload;
    });
  },
});

export default commentsSlice.reducer;
