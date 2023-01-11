import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReviewItems = () => {
  const locals =
    localStorage.getItem("order") !== null
      ? JSON.parse(localStorage.getItem("order"))
      : [];

  const [count, setCount] = useState(false); // made for updating the component when the local storage changes
  const navigate = useNavigate();
  const [filterLocals, setFilteredLocals] = useState([]);
  const notify = (message) =>
    toast(`${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  useEffect(() => {
    // removing the duplicates in the order page
    const ids = locals.map((o) => o.name);
    setFilteredLocals(
      locals.filter(({ name }, index) => !ids.includes(name, index + 1))
    );
    localStorage.setItem("cartItems", JSON.stringify(filterLocals));
  }, [count]);

  const increment = (itemName) => {
    const modifiedObj = locals?.map((item) =>
      item.name === itemName
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
    localStorage.setItem("order", JSON.stringify(modifiedObj));
    setCount(
      locals?.map((item) => (item.name === itemName ? item.quantity : 1))
    );
  };
  const decrement = (itemName) => {
    const modifiedObj = locals?.map((item) =>
      item.name === itemName
        ? { ...item, quantity: (item.quantity -= 1) }
        : item
    );
    localStorage.setItem("order", JSON.stringify(modifiedObj));
    setCount(
      locals?.map((item) => (item.name === itemName ? item.quantity : 1))
    );
  };
  const clearStorage = (itemName) => {
    const modifiedObj = locals?.filter((item) => item.name !== itemName);
    localStorage.setItem("order", JSON.stringify(modifiedObj));
    setCount(!count);
  };

  return (
    <div className="row align-items-baseline py-3 my-2 border border-2">
      <h4 className="fw-bold text-capitalize my-3 text-center text-md-start">
        Review Item and Shipping
      </h4>
      {filterLocals?.length < 1 ? (
        <>
          <h4 className="mt-4 fw-bold text-capitalize text-center">
            No items is in the cart
          </h4>
          <p className="text-center mt-3">
            <Link to="/">Click here to go back to the home page </Link>
          </p>
        </>
      ) : (
        <>
          {filterLocals?.map((product) => {
            return (
              <div className="row mx-auto my-3" key={product.name}>
                <div className="col col-md-6 d-md-flex gap-3 d-block align-items-center">
                  <img
                    src={product.img}
                    width="100%"
                    className="img-fluid"
                    alt="cart item image"
                    style={{
                      width: "60px",
                      height: "60px",
                      minWidth: "60px",
                      minHeight: "60px",
                    }}
                  />
                  <H4 className="fw-bold text-capitalize mt-3 lh-base">
                    {product.name}
                  </H4>
                </div>
                <div className="col col-md-6 text-md-end text-center d-flex flex-column justify-content-center align-items-center align-items-md-end my-3 my-md-0 gap-2">
                  <p className="fw-bold">
                    ${" "}
                    {Math.round(
                      parseInt(product.amount) * product.quantity
                      ).toFixed(2)}
                  </p>
                  <div className="d-flex justify-content-md-end">
                    <Button
                      className={`btn rounded-circle ${
                        product.quantity === 1 ? " disabled" : "btn-success"
                      }`}
                      style={{ maxWidth: "auto", textAlign: "center" }}
                      onClick={() => {
                        decrement(product.name)
                        notify(`${product.name} quantity has been decreased to ${product.quantity}`)
                      }}
                      >
                      -
                    </Button>
                    <p className="d-flex justify-content-between gap-2 align-items-center mx-2">
                      <span className="fw-bold">
                        Quantity: {product.quantity}
                      </span>
                    </p>
                    <Button
                      className="btn rounded-circle btn-success"
                      style={{ maxWidth: "auto", textAlign: "center" }}
                      onClick={() => {
                        increment(product.name)
                        notify(`${product.name} quantity has been increased to ${product.quantity}`)
                      }}
                      >
                      +
                    </Button>
                  </div>
                  <ButtonRemove
                    className="btn border-0 text-decoration-underline"
                    onClick={() => {
                      clearStorage(product.name)
                      notify(`${product.name} has been successfully removed.`)
                    }}
                    >
                    Remove
                  </ButtonRemove>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

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
    border: lightgrey !important;
  }
`;

export default ReviewItems;
