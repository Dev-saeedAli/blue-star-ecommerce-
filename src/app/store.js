import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice/categorySlice";
import productReducer from "./features/products/productSlice";
import productListReducer from "./features/getProductsList/getProductList"

const store = configureStore({
    reducer:{
        category : categoryReducer,
        product : productReducer,
        productList : productListReducer, 
    }
})

export default store;