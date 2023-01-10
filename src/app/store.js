import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice/categorySlice";
import productReducer from "./features/products/productSlice";
import productListReducer from "./features/getProductsList/getProductList"
import filterListReducer from "./features/filterCategorySlice/filterCategorySlice"
import productDetailReducer from "./features/productDetail/productDetailSlice"
import cartReducer from "./features/Cart/cartSlice"
import favouriteReducer from "./features/Favourites/favourites";

const store = configureStore({
    reducer:{
        category : categoryReducer,
        product : productReducer,
        productList : productListReducer, 
        filterList : filterListReducer,
        productDetail : productDetailReducer,
        cartItems : cartReducer,
        favourites :favouriteReducer,
    }
})

export default store;