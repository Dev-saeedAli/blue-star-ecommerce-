import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    categories:[],
    error:""
}

// store api
export const fetchCategories = createAsyncThunk('category/fetchCategories', async()=> {
    const response = await fetch('https://api.storerestapi.com/categories');
    const data = await response.json();
    return data.data;
}) 


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
            state.error = ""
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false
            state.categories = []
            state.error = action.payload.message
        })
    }
})

export default categorySlice.reducer;

