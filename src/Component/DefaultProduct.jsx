import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { addToCart } from '../app/features/Cart/cartSlice';
import { fetchProductDetailFilters } from '../app/features/productDetail/productDetailSlice';

const DefaultProduct = () => {
  const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { defaultProduct } = useSelector(
      (state) => state.productList
    );
    
  return (
    <Fragment>
        {
             defaultProduct?.map(({ title, price, rating, image, id }) => {
                return (
                  <div className="col" key={id}>
                    <div
                      className="card h-100 mh-100 position-relative"
                      onClick={(e) => {
                        if (e.target.localName !== "button") {
                          dispatch(fetchProductDetailFilters(id));
                          navigate("product/detail/" + id);
                        }
                      }}
                    >
                      <span className="badge rounded-pill position-absolute top-0 end-0">
                        <AiOutlineHeart
                          style={{ background: "white" }}
                          size={45}
                          color={"black"}
                          className="border-2 p-2 rounded-circle border border-light"
                        />
                      </span>
                      <img
                        src={image}
                        className="card-img-top"
                        alt="title"
                        loading="lazy"
                        style={{ height: "10.625rem", objectFit: "contain", width: "100%" }}
                      />
                      <div className="card-body">
                        <H3 className="card-title">
                          {title.length > 50 ? title.slice(0, 50) : title}...
                        </H3>
                        <p className="card-text">$ {parseInt(price).toFixed(2)}</p>
                        {Array(Math.round(rating.rate))
                          .fill("0")
                          .map((_, index) => (
                            <Stars
                              className=" d-inline-block my-2 mx-0"
                              key={index}
                            >
                              &#9733;
                            </Stars>
                          ))}
                        <button className="btn d-block btn-outline-success rounded-pill my-3"onClick={() => {
                          dispatch(addToCart({
                            "id" : id, "img":image, "rate" :rating , "amount" : price,"quantity":quantity, "name" : title
                          }))
                        }}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
        }
      
    </Fragment>
  )
}
const H3 = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Stars = styled.span`
  font-size: 2rem;
  color: #39a337;
`;

export default DefaultProduct
