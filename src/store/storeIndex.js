import { configureStore } from "@reduxjs/toolkit";
import changeProductSlice from "./changeProduct";
import searchProductSlice from "./searchProduct";


const store = configureStore({
  reducer: {
    changeProduct: changeProductSlice.reducer,
    searchProduct: searchProductSlice.reducer,
  },
});
export default store;