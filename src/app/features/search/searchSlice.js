import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    product: [],
    error:""
}


export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults', async(name)=> {
    const response = await fetch(`https://dummyjson.com/products/search?q=${name}`)
    const data = await response.json()
    return data.products
}) 

const searchSlice = createSlice({
    name : "search",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchSearchResults.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(fetchSearchResults.fulfilled, (state, action)=> {
            state.loading = false
            state.product = action.payload
            state.error =""
        })
        builder.addCase(fetchSearchResults.rejected, (state, action)=> {
            state.loading = false
            state.product = []
            state.error = action.payload.message
        })
    }
})


export default searchSlice.reducer