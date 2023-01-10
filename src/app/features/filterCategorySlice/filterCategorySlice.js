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

export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults', async(name)=> {
  const response = await fetch(`https://dummyjson.com/products/search?q=${name}`)
  const data = await response.json()
  return data.products
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
         state.error = action.payload
       })
       builder.addCase(fetchSearchResults.pending, (state)=> {
        state.loading = true
    })
    builder.addCase(fetchSearchResults.fulfilled, (state, action)=> {
        state.loading = false
        state.filterList = action.payload
        state.error =""
    })
    builder.addCase(fetchSearchResults.rejected, (state, action)=> {
        state.loading = false
        state.filterList = []
        state.error = action.payload
    })
    },
});

export default filterSlice.reducer