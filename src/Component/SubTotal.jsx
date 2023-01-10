import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../app/features/Cart/cartSlice'

const SubTotal = ({ subTotal }) => {
    const dispatch = useDispatch()
  return (
    <div className="row mt-3">
    <div className="col-12 col-md-6"></div>
    <div className="col-12 col-md-6 d-flex align-items-end flex-column gap-4">
      <h4>Total : <span className="fw-bold">$ {Math.round(subTotal).toFixed(2)}</span></h4>
      <button className="btn btn-outline-success rounded-pill"
      onClick={() => dispatch(clearCart())}
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
  )
}

export default SubTotal
