import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    product:[],
    error:""
}

export const fetchProductDetail = createAsyncThunk('details/productDetail', async (id) => {
    const response = await fetch('https://dummyjson.com/products/'+id);
    const data = await response.json();
    return data;
});

const productDetail = createSlice({
    name:'details',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetail.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.loading = false
            state.product = Array(action.payload)
            state.error = ""
        })
        builder.addCase(fetchProductDetail.rejected, (state, action) => {
            state.loading = false
            state.product = []
            state.error = action.payload.message
        })
    }
})

export default productDetail.reducer