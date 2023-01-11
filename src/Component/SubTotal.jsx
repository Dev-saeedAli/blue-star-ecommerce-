import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const SubTotal = ({ subTotal, proceed }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { products } = useSelector((state) => state.cartItems);
  const locals = localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : []

  
  return (
    <div className="row mt-3">
    <div className="col-12 col-md-6"></div>
    <div className="col-12 col-md-6 d-flex align-items-end flex-column gap-4">
      <h4>Total : <span className="fw-bold">$ {Math.round(subTotal).toFixed(2)}</span></h4>
      {proceed && <button className="btn btn-outline-success rounded-pill"
      onClick={() => {
        {proceed && 
          localStorage.setItem('order', JSON.stringify(products))
          navigate('/product/order')
        }
      }}
      >
        Proceed to Checkout
      </button>}
    </div>
  </div>
  )
}

export default SubTotal
