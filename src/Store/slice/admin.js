import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { authSlice } from "./auth";

const payload = {
  id: "",
  name: "",
  description: "",
  price: "",
  yearpublished: "",
  page: "",
  language: "",
  author: "",
  categories: [],
  image: "",
  sale: Boolean,
  quantity: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchListProducts",
  async () => {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
  }
);
export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (payload, thunkAPI) => {
    console.log("check payloadCreate = ", payload);
    try {
      const res = await axios.post("http://localhost:3000/products", payload);
      const data = res.data;
      if (data && data.id) {
        thunkAPI.dispatch(fetchProducts());
      }
      return data;
    } catch (error) {
      console.log("check error = ", error);
    }
  }
);
export const editProducts = createAsyncThunk(
  "products/editProducts",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/products/${payload.id}`,
        payload
      );
      const data = res.data;
      console.log(">>> check data put = ", data);
      if (data && data.id) {
        thunkAPI.dispatch(fetchProducts());
      }

      return data;
    } catch (error) {
      console.log("check error", error);
    }
  }
);
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/products/${payload.id}`,
        payload
      );

      const data = res.data;
      thunkAPI.dispatch(fetchProducts());
      return data;
    } catch (error) {
      console.log("check error", error);
    }
  }
);

const payloadBlog = {
  id: "",
  title: "",
  content: "",
  date: "",
  categories: [],
};

export const fetchBlogs = createAsyncThunk("blog/fetchListBlogs", async () => {
  const res = await axios.get(`http://localhost:3000/blog`, payloadBlog);
  return res.data;
});
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (payloadBlog, thunkAPI) => {
    console.log(">>> check payloadBlog", payloadBlog);
    try {
      const res = await axios.post(`http://localhost:3000/blog`, payloadBlog);
      const data = res.data;
      if (data && data.id) {
        thunkAPI.dispatch(fetchBlogs());
      }
      return data;
    } catch (error) {
      console.log(">>> check error = ", error);
    }
  }
);
export const editBlog = createAsyncThunk(
  "blogs/editBlog",
  async (payloadBlog, thunkAPI) => {
    console.log("> check payloadblog edit", payloadBlog);
    try {
      const res = await axios.put(
        `http://localhost:3000/blog/${payloadBlog.id}`,
        payloadBlog
      );
      const data = res.data;
      if (data && data?.id) {
        thunkAPI.dispatch(fetchBlogs());
      }
      return data;
    } catch (error) {
      console.log("check error = ", error);
    }
  }
);
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (payloadBlog, thunkAPI) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/blog/${payloadBlog.id}`,
        payloadBlog
      );

      const data = res.data;
      thunkAPI.dispatch(fetchBlogs());
      return data;
    } catch (error) {
      console.log("check error", error);
    }
  }
);

const initialState = {
  products: [],
  blogs: [],
};
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
  },
});

export const { resetCreate } = authSlice.actions;
export default adminSlice.reducer;
