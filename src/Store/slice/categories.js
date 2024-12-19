import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchListProducts",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    //* Lọc ra categories
    const categories = res.data.map((item) => {
      return item.categories;
    });
    //* Gộp nhiều arr vào một arr chính
    const mergeCategories = categories.reduce(
      (acc, curr) => acc.concat(curr),
      []
    );
    //* Lọc ra những giá trị duy nhất
    const uniqueCategories = mergeCategories.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    return uniqueCategories;
  }
);

export const fetchAuthor = createAsyncThunk("author/fetchAuthor", async () => {
  const res = await axios.get("https://websitebook-api.vercel.app/products");
  //* Lọc ra danh sách author
  const author = res.data.map((item) => {
    return item.author;
  });
  //*Lọc ra giá trị duy nhất
  const uniqueAuthor = author.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return uniqueAuthor;
});

const initialState = {
  products: [],
  categories: [],
  author: [],
  arr: [
    {
      categories: [],
      author: [],
      minPrice: 0,
      maxPrice: 0,
    },
  ],
  filter: [],
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    currCateChecked(state, action) {
      state.arr[0].categories.push(action.payload);
    },
    currAuthorChecked(state, action) {
      state.arr[0].author.push(action.payload);
    },
    updateminPrice(state, action) {
      state.arr[0].minPrice = action.payload;
    },
    updatemaxPrice(state, action) {
      state.arr[0].maxPrice = action.payload;
    },

    filterall(state) {
      state.filter = state.products.filter((product) => {
        const categories = product.categories.some((category) =>
          state.arr[0].categories.includes(category)
        );

        const toAuthorArr = [product.author];
        const author = toAuthorArr.some((item) =>
          state.arr[0].author.includes(item)
        );

        const price =
          product.price >= state.arr[0].minPrice &&
          product.price <= state.arr[0].maxPrice;

        return categories || author || price;
      });
    },

    clearFilter(state) {
      state.arr[0].categories = [];
      state.arr[0].author = [];
      state.arr[0].minPrice = "0";
      state.arr[0].maxPrice = "0";
      state.filter = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      state.author = action.payload;
    });
  },
});

export const {
  clearFilter,
  updateminPrice,
  updatemaxPrice,
  currCateChecked,
  currAuthorChecked,
  filterall,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
