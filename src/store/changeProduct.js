import { createSlice } from "@reduxjs/toolkit";


const changeProductSlice = createSlice({
    name: "changeProduct",
    initialState: {
        productList: "All"
    },
    reducers: {
         setOnload(state, action) {
          state.productList = action.payload
        },
       
    }
})

export const changeProductAction = changeProductSlice.actions;

export default changeProductSlice;