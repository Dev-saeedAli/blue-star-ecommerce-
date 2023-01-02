import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    productCategory:[],
    error:""
}

export const getProductList = createAsyncThunk("productList/getProductList", async(id) =>{
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    const data = await response.json();
    return data;  
}); 

const productListSlice = createSlice({
    name: "productList",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getProductList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.loading = false
            state.productCategory = action.payload
            state.error = ""
        })
        builder.addCase(getProductList.rejected, (state, action) => {
            state.loading = false
            state.productCategory = []
            state.error = action.payload.message
        })
    }
})

export default productListSlice.reducer
