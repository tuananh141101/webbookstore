import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchListProducts",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    return res.data;
  }
);
export const fetchProductsBestSelling = createAsyncThunk(
  "products/fetchListItemBestSelling",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    const data = res.data;
    const bestSellingProducts = data.slice(0, 8);
    return bestSellingProducts;
  }
);
export const fetchProductsLatest = createAsyncThunk(
  "products/fetchListItemLatest",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    const data = res.data;
    const latest = data.slice(9, 17);
    return latest;
  }
);
export const fetchProductsSale = createAsyncThunk(
  "products/fetchListItemSale",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    const data = res.data;
    const sale = data.slice(16, 23);
    return sale;
  }
);

const initialState = {
  listProducts: [],
  listProductsBestSelling: [],
  listProductsLatest: [],
  listProductsSale: [],
};
export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNewProducts: (state, action) => {
      console.log(">>> check action reducers: ", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.listProducts = action.payload;
    });
    builder.addCase(fetchProductsBestSelling.fulfilled, (state, action) => {
      state.listProductsBestSelling = action.payload;
    });
    builder.addCase(fetchProductsLatest.fulfilled, (state, action) => {
      state.listProductsLatest = action.payload;
    });
    builder.addCase(fetchProductsSale.fulfilled, (state, action) => {
      state.listProductsSale = action.payload;
    });
  },
});

export const { setNewProducts } = productsSlice.actions;
export default productsSlice.reducer;
