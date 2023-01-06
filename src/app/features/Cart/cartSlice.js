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
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart} =  cartSlice.actions

