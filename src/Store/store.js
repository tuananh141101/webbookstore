import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/products";
import commentsSlice from "./slice/comments";
import categoriesSlice from "./slice/categories";
import cartSlice from "./slice/cart";
import authSlice from "./slice/auth";
import blogSlice from "./slice/blog";
import storage from "redux-persist/lib/storage";
import adminSlice from "./slice/admin";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["carts", "auths"],
};

const rootReducer = combineReducers({
  products: productsSlice,
  comments: commentsSlice,
  categories: categoriesSlice,
  carts: cartSlice,
  auths: authSlice,
  blogs: blogSlice,
  admins: adminSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
