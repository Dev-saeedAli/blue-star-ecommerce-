import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductDetailInfo from "../../Component/ProductDetailInfo";
import Spinner from "../../Component/Spinner";

const ProductDetail = () => {
  const displayImage = useRef();
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );

  return (
    <div className="container">
      <h3 className="fw-bold my-3 text-center text-lg-start">Product Detail</h3>
      <div className="row row-cols-1 row-cols-lg-2 my-5 row-gap-5 column-gap-3">
        {loading ? (
          <Spinner />
        ) : (
          product?.map((item) => {
            const {
              id,
              title,
              description,
              discountPercentage,
              images,
              price,
              rating,
              stock,
              thumbnail,
            } = item;
            return (
              <Fragment key={id}>
                <div className="col">
                  <div className="row text-center">
                    <div className="col">
                      <img
                        ref={displayImage}
                        src={thumbnail}
                        className="rounded img-fluid"
                        alt="title image"
                        style={{ maxHeight: "350px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="row row-cols-5 mt-2">
                    {images?.map((image, index) => {
                      return (
                        <div
                          className={`text-center col mt-3 rounded bg-light ${
                            images.length === 4 ? "mx-auto" : "mx-auto"
                          }`}
                          key={index}
                        >
                          <img
                            onClick={(e) => {
                              displayImage.current.src = e.target.src;
                            }}
                            className="img-fluid"
                            style={{
                              objectFit: "cover",
                              height: "80px",
                              cursor: "pointer",
                            }}
                            src={image}
                            alt={title + " preview image"}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                 <ProductDetailInfo 
                 rating={rating} price={price} stock={stock} title={title}  description={description} discountPercentage={discountPercentage}
                 />
              </Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
