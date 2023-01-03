import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    product:[],
    error:""
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() =>{
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data;
}); 

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
            state.error = ""
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.product = []
            state.error = action.payload.message
        })
    }
})

export default productSlice.reducer
