import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice/categorySlice";
import productReducer from "./features/products/productSlice";
import productListReducer from "./features/getProductsList/getProductList"
import filterListReducer from "./features/filterCategorySlice/filterCategorySlice"
import productDetailReducer from "./features/productDetail/productDetailSlice"

const store = configureStore({
    reducer:{
        category : categoryReducer,
        product : productReducer,
        productList : productListReducer, 
        filterList : filterListReducer,
        productDetail : productDetailReducer,
    }
})

export default store;