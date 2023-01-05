import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading : false,
    filterList : [],
    error:""
}

export const fetchFilterList = createAsyncThunk('filters/fetchFilterList', async(name)=> {
    const response = await fetch(`https://dummyjson.com/products/category/${name}`)
    const data = await response.json()
    return data;
})

const filterSlice = createSlice({
    name : "filters",
    initialState,
    reducers : {},
    extraReducers: (builder) => {
       builder.addCase(fetchFilterList.pending, (state) => {
         state.loading = true
       })
       builder.addCase(fetchFilterList.fulfilled, (state, action) => {
         state.loading = false
         state.filterList = action.payload
         state.error = ""
       })
       builder.addCase(fetchFilterList.rejected, (state, action) => {
         state.loading = false
         state.filterList = []
         state.error = action.payload.message
       })
    },
});

export default filterSlice.reducer