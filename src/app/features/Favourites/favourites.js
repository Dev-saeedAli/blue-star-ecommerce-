import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
  favouriteList: localStorage.getItem('favourites') !== null ? JSON.parse(localStorage.getItem('favourites')) : []
}

const favouriteSlice = createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addToFavourites: (state, action ) => {
            state.favouriteList.push(action.payload)
            localStorage.setItem('favourites', JSON.stringify(state.favouriteList))
        },
        removeFromFavourites : (state, action) => {
            state.favouriteList = state.favouriteList.filter(item => item.name !== action.payload.name)
            localStorage.setItem('favourites', JSON.stringify(state.favouriteList))
        },
        removeDuplicates : (state) => {
            //removing all the duplicates from the localstorage and resetting
            // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
            const ids = state.favouriteList.map(o => o.name)
            state.favouriteList = state.favouriteList.filter(({name}, index) => !ids.includes(name, index + 1))
            localStorage.setItem('cartItems', JSON.stringify(state.favouriteList))
          }
    }
})

export default favouriteSlice.reducer
export const { addToFavourites, removeFromFavourites, removeDuplicates } = favouriteSlice.actions