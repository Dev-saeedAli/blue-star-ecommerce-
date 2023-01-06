import React  from "react";
import { useSelector } from "react-redux";
import CategoryProducts from "../../Component/CategoryProducts";
import SelectedProduct from "../../Component/SelectedProduct";
import Spinner from "../../Component/Spinner";

const ProductDetail = () => {
  const { loading, selectedList } = useSelector(
    (state) => state.productDetail
  );

  return (
    <div className="container">
      <h3 className="fw-bold my-3 text-center text-lg-start">Product Detail</h3>
      <div className="row row-cols-1 row-cols-lg-2 my-5 row-gap-5 column-gap-3">
        {loading ? (
          <Spinner />
        ) : selectedList.length ? (
          <SelectedProduct/>
        ) : (
          <CategoryProducts/>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
