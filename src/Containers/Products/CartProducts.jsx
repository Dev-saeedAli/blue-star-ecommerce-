import React, { Fragment ,useRef } from "react";
import styled from "styled-components";

const CartProducts = () => {
    const tableStyles = {background:"#198754", color:"white"}
    const currentInput = useRef(null)
    const localCart = JSON.parse(localStorage.getItem("cartItems"));
    function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject = {};

    for (let i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (let i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    localStorage.setItem('cartItems', JSON.stringify(newArray))
    return newArray;
  }
  removeDuplicates(localCart, "id");

  const setAmount = (id, count) => {
    const local = JSON.parse(localStorage.getItem('cartItems'))
    localStorage.setItem('cartItems', JSON.stringify(local.filter(item => item.id === id ? item.quantity += count:item.quantity)))
  }


  return (
    <div className="container my-3">
      <div className="table-responsive">
        <table className="table">
          <thead style={tableStyles}>
            <tr className="text-center">
              <th className="text-start">Products</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {localCart?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <tr className="text-center gap-3">
                    <td className="d-flex align-items-center gap-3 text-start">
                      <img src={item.img} width="60px" alt="cart product image" />
                      <div className="d-flex flex-column align-items-start gap-1">
                        <h4 className="fw-bold lh-base" style={{ fontSize: ".9rem", maxWidth:"200px" }}>
                          {item.name}
                        </h4>
                        <p style={{ fontSize: "1rem" }}>
                          Price : <span className="fw-bold">${Math.round(parseInt(item.amount)).toFixed(2)}</span>
                        </p>
                        <Button
                          className="btn btn-outline-danger"
                          style={{ padding: "3px" }}
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                    <td><label htmlFor="quantityNo"></label><input style={{width:"50px"}} className="text-center mx-auto form-control" id="quantityNo" type="number" onChange={(e) => {
                        setAmount(item.id, Number(e.target.value))
                    }}/>
                    </td>
                    <td className="fw-bold">${Math.round(parseInt((item.amount)) * item.quantity).toFixed(2)}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Button = styled.button`
  font-size: 1rem;
  border: none;
  color: red;
  text-decoration: underline;
  &:hover {
    background: none;
    color: darkred;
  }
`;

export default CartProducts;
