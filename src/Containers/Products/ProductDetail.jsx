import React  from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CategoryProducts from "../../Component/CategoryProducts";
import SelectedProduct from "../../Component/SelectedProduct";
import Spinner from "../../Component/Spinner";

const ProductDetail = () => {
  const navigate = useNavigate()
  const { loading, selectedList } = useSelector(
    (state) => state.productDetail
  );
  

  return (
    <div className="container">
      <div className="d-flex align-items-center my-4">
      <IoMdArrowRoundBack style={{cursor:"pointer"}} size={50} onClick={() => navigate('/')}/>
      <h3 className="fw-bold my-3 text-center text-lg-start mx-md-3">Product Detail</h3>
      </div>
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
