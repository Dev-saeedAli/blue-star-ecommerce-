import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
}
const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers:  {
        addToCart : (state, action) => {
            state.products.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.products))

        },
        removeFromCart : (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.products))
        },
        increment : (state, action) => {
            state.products = state.products.filter((item) => item.id === action.payload.id ? {quantity: item.quantity += action.payload.quantity}: item)
            localStorage.setItem('cartItems', JSON.stringify(state.products))
          },
        decrement : (state, action) => {
            state.products = state.products.filter((item) => item.id === action.payload.id ? {quantity: item.quantity -= action.payload.quantity}: item)
            localStorage.setItem('cartItems', JSON.stringify(state.products))
          },
          removeDuplicates : (state) => {
            // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
            const ids = state.products.map(o => o.name)
            state.products = state.products.filter(({name}, index) => !ids.includes(name, index + 1))
            localStorage.setItem('cartItems', JSON.stringify(state.products))
          }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, removeDuplicates } =  cartSlice.actions

