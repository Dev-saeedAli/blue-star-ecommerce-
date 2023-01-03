import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    productCategory:[],
    defaultProduct : [],
    error:""
}

export const getProductList = createAsyncThunk("productItems/getProductList", async(name) =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
    const data = await response.json();
    return data;
}); 

export const displayDefault = createAsyncThunk("productItems/displayDefault", async () =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
    const data = await response.json();
    return data;
}); 



const productListSlice = createSlice({
    name: "productItems",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getProductList.pending, (state) => {
            state.loading = true
            state.productCategory = []
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.loading = false
            state.productCategory = action.payload
            state.defaultProduct = []
            state.error = ""
        })
        builder.addCase(getProductList.rejected, (state, action) => {
            state.loading = false
            state.productCategory = []
            state.defaultProduct = []
            state.error = action.payload.message
        })
        builder.addCase(displayDefault.pending, (state) => {
            state.loading = true
            state.productCategory = []
            state.defaultProduct = []
            state.error = ""
        })
        builder.addCase(displayDefault.fulfilled, (state, action) => {
            state.loading = false
            state.productCategory = []
            state.defaultProduct = action.payload
            state.error = ""
        })
        builder.addCase(displayDefault.rejected, (state, action) => {
            state.loading = false
            state.productCategory = []
            state.defaultProduct = []
            state.error = action.payload.message
        })
    }
})

export default productListSlice.reducer
