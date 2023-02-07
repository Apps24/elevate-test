import { createSlice } from "@reduxjs/toolkit";


const searchProductSlice = createSlice({
    name: "searchProduct",
    initialState: {
        productList: ""
    },
    reducers: {
         setProductName(state, action) {
          state.productList = action.payload
        },
       
    }
})

export const searchProductAction = searchProductSlice.actions;

export default searchProductSlice;