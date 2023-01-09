import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import ProductCategory from "./ProductCategory";
import DefaultProduct from "./DefaultProduct";
import { displayDefault } from "../app/features/getProductsList/getProductList";

const FilteredProductCards = () => {
  const dispatch = useDispatch()
  const { loading, productCategory} = useSelector(
    (state) => state.productList
  );
   useEffect(() => {
        dispatch(displayDefault());
    
        return () => dispatch(displayDefault());
      }, []);


  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ minHeight: "70vh" }}
      >
        {loading ? (
          <Spinner />
        ) : productCategory.length > 0 ? (
          <ProductCategory/>// category that is mapped above
        ) : (
         <DefaultProduct/>
        )}
      </div>
    </>
  );
};

export default FilteredProductCards;
