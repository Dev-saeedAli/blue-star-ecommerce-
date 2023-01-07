import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ReviewItems = () => {
  const {img, name, quantity, amount } =  localStorage.getItem('order') !== null  ? JSON.parse(localStorage.getItem('order')) : [] 
  const [count, setCount ]= useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setCount(quantity)
  }, [])
  
  const increment = () => {
    let {amount, discount, id, img, info, name, rate, sale, quantity} = localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : []
    ++quantity
    setCount((prevCount) => prevCount += 1)
    localStorage.setItem('order', JSON.stringify({
      "amount":amount,
      "discount":discount,
      "id":id,
      "img":img,
      "info":info,
      "name":name,
      "rate":rate,
      "sale":sale,
      "quantity":quantity
    }))
  }
  
  const clearStorage = () => {
    localStorage.setItem('order', "[]");
    navigate('/')
  }
  const decrement = () =>{
    let {amount, discount, id, img, info, name, rate, sale, quantity} = JSON.parse(localStorage.getItem('order'))
    if(quantity <= 1){
      quantity = 1
      setCount(quantity)
    }else {

      --quantity
      setCount((prevCount) => prevCount -= 1)
      localStorage.setItem('order', JSON.stringify({
        "amount":amount,
        "discount":discount,
        "id":id,
        "img":img,
        "info":info,
        "name":name,
        "rate":rate,
        "sale":sale,
        "quantity":quantity
      }))
    }
  }


  return (
    <div className="row align-items-baseline py-3 my-2 border border-2">
            <h4 className="fw-bold text-capitalize my-3 text-center text-md-start">
              Review Item and Shipping
            </h4>
            {localStorage.getItem('order') === null ?(
              <>
              <h4 className='mt-4 fw-bold text-capitalize text-center'>No items is in the cart</h4>
              <p className='text-center mt-3'><Link to='/'>Click here to go back to the home page </Link></p>
              </>
            ): (
              <div className="row mx-auto">
              <div className="col col-md-6 d-md-flex gap-3 d-block align-items-center">
              <img src={img} width="100%" className='img-fluid' alt="cart item image" style={{width:"60px", height:"60px", minWidth:"60px", minHeight: "60px"}} />
              <H4 className="fw-bold text-capitalize mt-3 lh-base">{name}</H4>
              </div>
              <div className="col col-md-6 text-md-end text-center d-flex flex-column justify-content-center align-items-center align-items-md-end my-3 my-md-0 gap-2">
              <p className="fw-bold">$ {parseInt(amount).toFixed(2)}</p>
              <div className='d-flex justify-content-md-end'>
              <Button className={`btn rounded-circle ${quantity === 1 ? " disabled" : "btn-success"}`} style={{maxWidth:"auto", textAlign:"center"}}onClick={decrement}>-</Button>
                    <p className="d-flex justify-content-between gap-2 align-items-center mx-2">
                      <span className="fw-bold">Quantity:</span>
                      <span>{count > 9 ? count : "0" + count}</span>
                    </p>
                    <Button className="btn rounded-circle btn-success" style={{maxWidth:"auto", textAlign:"center"}} onClick={increment}>+</Button>
              </div>
              <ButtonRemove className="btn border-0 text-decoration-underline" onClick={clearStorage}>
                    Remove
                  </ButtonRemove>
              </div>

            </div>
            )}
           
          </div>
  )
}

const H4 = styled.h4`
  font-size: 1rem;
`;

const ButtonRemove = styled.button`
  color: red;
  &:hover {
    color: darkred;
  }
`;
const Button = styled.button`
  &.disabled {
     border:lightgrey !important;
  }
`;

export default ReviewItems
