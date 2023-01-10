import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsSave2Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeDuplicates, removeFromFavourites } from "../../app/features/Favourites/favourites";

const ProductFavourites = () => {
  const { favouriteList } = useSelector((state) => state.favourites);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(removeDuplicates())
  }, [])

  return (
    <div className="container">
      <h2 className="fw-bold my-4">My Favourites</h2>
      <div className="row mx-1 d-flex justify-content-between flex-wrap row-gap-4">
        {favouriteList.length > 0 ? (
          favouriteList?.map(({ img, name, amount, rate }, index) => {
            return (
              <div
                key={index}
                className="col-md-5 bg-light p-3 rounded-4 d-flex gap-3 align-items-center position-relative"
              >
                <img
                  src={img}
                  className="img-fluid"
                  alt={name + " image"}
                  width={60}
                  loading="lazy"
                />
                <div className="align-self-start">
                  <p>
                    {rate
                      ? Array(Math.round(rate))
                          .fill("*")
                          .map((_, index) => {
                            return (
                              <AiFillStar
                                key={index}
                                className="text-warning"
                              />
                            );
                          })
                      : null}
                  </p>
                  <h4
                    className="fw-bold lh-base my-2 text-capitalize"
                    style={{ fontSize: "1rem" }}
                  >
                    {name}
                  </h4>
                  <p className="my-2">
                    Price :{" "}
                    <span className="fw-bold">
                      $ {parseInt(amount).toFixed(2)}
                    </span>
                  </p>
                    <Button className="btn btn-outline-danger" onClick={() => dispatch(removeFromFavourites({name}))} >Remove</Button>
                  <span
                  onClick={() => {}}
                    className="position-absolute"
                    style={{ top: "0px", right: "10px"}}
                  >
                    <BsSave2Fill className="text-warning" size={30} />
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <h4 className="fw-bold text-capitalize">You have not added any products to your favourites</h4>
            <Link to="/" ><p className="my-3">Click here to go back to home page</p></Link>
          </div>
        )}
      </div>
    </div>
  );
};


const Button = styled.button`
cursor:pointer;
text-decoration: underline;
border:none;
padding:0;
outline:none;
&:hover, &:active {
  color: red;
  background:none;
}
  
`  

export default ProductFavourites;
