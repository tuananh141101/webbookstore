import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import products from "./products";

export const fetchProducts = createAsyncThunk(
  "products/fetchListProducts",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    return res.data;
  }
);

const initialState = {
  products: [],
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCheckOut: false,
  isCheckoutSuccess: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    gotoCheckOut: (state, action) => {
      state.isCheckOut = action.payload;
    },

    isCartCheckOutSuccess: (state, action) => {
      state.isCheckoutSuccess = action.payload;
      if (state.isCheckoutSuccess) {
        state.cart = [];
      }
    },

    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;

          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;

          console.log(">>> check cartTotal in cartSlice = ", cartTotal);

          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {
  gotoCheckOut,
  addToCart,
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  isCartCheckOutSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
