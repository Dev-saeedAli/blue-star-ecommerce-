import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    product:[],
    error:""
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() =>{
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')
    const data = await response.json()
    return data.filter(item => item.id !== 11 && item.id!==12); // filtering out the id 11 and 12 because the api is providing an empty array
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
