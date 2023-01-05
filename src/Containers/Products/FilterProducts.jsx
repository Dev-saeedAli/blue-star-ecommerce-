import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterList } from "../../app/features/filterCategorySlice/filterCategorySlice";
import { useNavigate, useParams } from "react-router";
import Spinner from "../../Component/Spinner";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { fetchProductDetail } from "../../app/features/productDetail/productDetailSlice";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, filterList, error } = useSelector(
    (state) => state.filterList
  );

  return (
    <div className="container">
      <h3 className="text-center text-md-start fw-bold my-5">Top Categories</h3>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4"
        style={{ minHeight: "70vh" }}
      >
        {
          loading ? (
            <Spinner/>
          ) : (
            filterList?.products?.map(item => {
              const { id, title, price, thumbnail, rating, description } = item
              return (
                <div className="col" key={id}>
                <div className="card h-100 mh-100" style={{cursor:"pointer"}} onClick={(e)=>  {
                  if(e.target.localName !== "button"){
                    dispatch(fetchProductDetail(id))
                    navigate('/product/detail/'+ id) 
                  }
                }}>
                  <span className="badge rounded-pill position-absolute top-0 end-0">
                    <AiOutlineHeart
                      style={{ background: "white" }}
                      size={45}
                      color={"black"}
                      className="border-2 p-2 rounded-circle border border-light"
                    />
                  </span>
                  <img
                  loading="lazy"
                    src={thumbnail}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "170px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <H3 className="card-title text-uppercase">{title.length > 40 ? title.slice(0, 40) + '...' :title + '.'}</H3>
                    <p className="card-text fw-medium">{description.length > 25?description.slice(0, 25)+'...' : description + '.'}</p>
                    <p className="card-text fw-semibold my-2">$ {parseInt(price).toFixed(2)}</p>
                    {Array(Math.round(rating))
                      .fill("0")
                      .map((_, index) => (
                        <Stars className=" d-inline-block my-2 mx-0" key={index}>
                          &#9733;
                        </Stars>
                      ))}
                         <button className="btn d-block btn-outline-success rounded-pill my-1">
                            Add to Cart
                          </button>
                  </div>
                </div>
              </div>
              )
            })
          )
        }

      </div>
    </div>
  );
};

const H3 = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Stars = styled.span`
  font-size: 2rem;
  color: #39a337;
`;


export default FilterProducts;
