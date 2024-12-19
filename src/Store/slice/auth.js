import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allAccount: [],
  loading: true,
  admin: false,
  user: {
    username: "",
    password: "",
  },
};

export const fetchAccount = createAsyncThunk("auth/fetchAccount", async () => {
  const res = await axios.get("https://websitebook-api.vercel.app/login");
  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAccount: (state, action) => {
      state.user = action.payload;

      state.allAccount.map((item, index) => {
        if (
          item.username === state.user.username &&
          item.password === state.user.password
        ) {
          state.admin = true;
        }
      });
    },
    clearUser: (state, action) => {
      state.user.username = "";
      state.user.password = "";
      state.admin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccount.fulfilled, (state, action) => {
      state.allAccount = action.payload;
    });
  },
});

export const { checkAccount, clearUser } = authSlice.actions;
export default authSlice.reducer;
