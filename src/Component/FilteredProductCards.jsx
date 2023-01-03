import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { displayDefault } from "../app/features/getProductsList/getProductList";
import Spinner from "./Spinner";

const FilteredProductCards = () => {
  const dispatch = useDispatch()
  const { loading, productCategory, defaultProduct } = useSelector(
    (state) => state.productList
  );

  useEffect(()=> {
    dispatch(displayDefault())

    return () => dispatch(displayDefault())

  }, [])

  const category = productCategory.map(({title, price, rating, image , id}) => {
    return (
      <div className="col" key={id}>
        <div className="card h-100 mh-100">
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ height: "170px", objectFit: "cover" }}
          />
          <div className="card-body">
            <H3 className="card-title">{title}</H3>
            <p className="card-text">$ {parseInt(price).toFixed(2)}</p>
             {
               Array(Math.floor(rating.rate)).fill('0').map((_, index) => <Stars className=" d-inline-block my-2 mx-0"  key={index}>&#9733;</Stars>)

             }
          </div>
        </div>
      </div>
    );
  });

  // console.log(rating)

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{minHeight: "70vh"}}>
        {loading ?  (
          <Spinner/>
          ) : (
        productCategory.length > 0) ? (
          category // category that is mapped above
        ) : (
          defaultProduct?.map(({title, price, rating, image, id}) => {
            return (
              <div className="col" key={id}>
                <div className="card h-100 mh-100">
                  <img
                    src={image}
                    className="card-img-top"
                    alt="title"
                    style={{ height: "170px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <H3 className="card-title">{title}</H3>
                    <p className="card-text">$ {parseInt(price).toFixed(2)}</p>
                     {
                      Array(Math.floor(rating.rate)).fill('0').map((_, index) => <Stars className=" d-inline-block my-2 mx-0" key={index}>&#9733;</Stars>)

                     }
                    <button className="btn d-block btn-outline-success rounded-pill my-3">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

const H3 = styled.h3`
  font-size: 1.2rem;
`

const Stars = styled.span`
  font-size: 2rem;
  color: #39a337;
`

export default FilteredProductCards;
