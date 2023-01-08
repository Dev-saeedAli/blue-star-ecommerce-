import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { addToCart } from '../app/features/Cart/cartSlice';

const ProductDetailInfo = ({id, rating, price, stock, title , description, discountPercentage, img}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity += 1)
   
  }
  const decrement = () => {
    if(quantity <= 1){
      setQuantity(1)
    }else {
      setQuantity((prevQuantity) => prevQuantity -= 1)
    }
  }
  
  return (
    <div className="row row-cols-1 align-content-center">
    <div className="col mb-3  border-dark border border-start-0 border-top-0 border-end-0">
      <h3 className="fw-bold">{title}</h3>
      <p className="mt-3">{description}</p>
      <p className="d-inline ">
        {Array(Math.round(rating))
          .fill("0")
          .map((_, index) => {
            return (
              <Stars
                className=" d-inline-block my-2 mx-0"
                key={index}
              >
                &#9733;
              </Stars>
            );
          })}
      </p>
      <span>({rating})</span>
    </div>
    <div className="col">
      <p className="fw-bold">
        $ {Math.round(price).toFixed(2)}{" "}
        <span className="ms-3 fw-light">
          DiscountPercentage ({discountPercentage})
        </span>
      </p>
      <div className="d-flex align-items-center mt-3 gap-2">
        <button className="btn btn-light rounded-pill" onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-light rounded-pill" onClick={increment}>+</button>
        <p className="mx-4">
          Only <span className="text-warning">{stock} items</span>{" "}
          is available dont miss out!{" "}
        </p>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-4">
        <button className="btn btn-success rounded-pill px-lg-5" onClick={() => {
            navigate('/product/order')
            localStorage.setItem('order', JSON.stringify({
              "id" : id, "img":img, "rate" :rating ,"quantity":quantity, "amount" : price, "sale" : stock, "name" : title , "info":  description, "discount" : discountPercentage, "quantity":quantity
            }))
        }}>
          Buy Now
        </button>
        <button className="btn btn-outline-success rounded-pill px-lg-5" onClick={() => {
          dispatch(addToCart({
            "id" : id, "img":img, "rate" :rating , "amount" : price,"quantity":quantity, "sale" : stock, "name" : title , "info":  description, "discount" : discountPercentage
          }))
        }}>
          Add to cart
        </button>
      </div>
    </div>
  </div>
  )
}

const Stars = styled.span`
  font-size: 2rem;
  color: #39a337;
`;


export default ProductDetailInfo
