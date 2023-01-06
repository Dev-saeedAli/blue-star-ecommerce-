import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    categoryList:[],
    selectedList:[],
    error:""
}

export const fetchProductDetail = createAsyncThunk('details/fetchProductDetail', async (id) => {
    const response = await fetch('https://dummyjson.com/products/'+id);
    const data = await response.json();
    return data;
});
export const fetchProductDetailFilters = createAsyncThunk('details/fetchProductDetailFilters', async (id) => {
    const response = await fetch('https://fakestoreapi.com/products/'+id);
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
            state.categoryList = Array(action.payload)
            state.selectedList = []
            state.error = ""
        })
        builder.addCase(fetchProductDetail.rejected, (state, action) => {
            state.loading = false
            state.categoryList = []
            state.error = action.payload.message
        })
        builder.addCase(fetchProductDetailFilters.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProductDetailFilters.fulfilled, (state, action) => {
            state.loading = false
            state.categoryList = []
            state.selectedList = Array(action.payload)
            state.error = ""
        })
        builder.addCase(fetchProductDetailFilters.rejected, (state, action) => {
            state.loading = false
            state.selectedList = []
            state.error = action.payload.message
        })
    }
})

export default productDetail.reducer