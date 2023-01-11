import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  decrement,
  increment,
  removeDuplicates,
  removeFromCart,
} from "../../app/features/Cart/cartSlice";
import SubTotal from "../../Component/SubTotal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartProducts = () => {
  let { products } = useSelector((state) => state.cartItems);
  const [subTotal, setSubTotal] = useState(0)

  const dispatch = useDispatch();
  const tableStyles = { background: "#198754", color: "white" };
  const notify = (message) => toast(`${message}`, {
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
    dispatch(removeDuplicates());
  }, []);
  
  useEffect(()=> {
    if(products.length > 0){
      setSubTotal(products.map(({amount, quantity}) => {
        return Math.round(parseInt(amount)) * parseInt(quantity) ;
      }).reduce((total, item) => total += item))
    }
  }, [products])



  return (
    <div className="container my-3">
      {products.length < 1 ? (
        <div className="text-center">
          <h3 className="fw-bold">No items is in the cart </h3>
          <Link to="/" className="mt-4">
            Click here to go back to the homepage
          </Link>
        </div>
      ) : (
        <>
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
              {products?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <tr className="text-center gap-3">
                      <TD className="d-flex align-items-center gap-3 text-start">
                        <img
                          src={item.img}
                          width="60px"
                          alt="cart product image"
                        />
                        <div className="d-flex flex-column align-items-start gap-1">
                          <h4
                            className="fw-bold lh-base"
                            style={{ fontSize: ".9rem", maxWidth: "200px" }}
                          >
                            {item.name}
                          </h4>
                          <p style={{ fontSize: "1rem" }}>
                            Price :{" "}
                            <span className="fw-bold">
                              ${Math.round(parseInt(item.amount)).toFixed(2)}
                            </span>
                          </p>
                          <Button
                            onClick={() => {
                              dispatch(removeFromCart(item.id))
                              notify(`${item.name} has been removed from the cart`)
                            }}
                            className="btn btn-outline-danger"
                            style={{ padding: "3px" }}
                          >
                            Remove
                          </Button>
                        </div>
                      </TD>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                          <button
                            className={`btn btn-success rounded-pill ${
                              item.quantity <= 1 ? "disabled" : ""
                            }`}
                            onClick={() => {
                              dispatch(decrement({ id: item.id, quantity: 1 }))
                              notify(`Your ${item.name} quantity has been reduced to ${item.quantity}`)
                             }
                            }
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button
                            className="btn btn-success rounded-pill"
                            onClick={() => {
                              dispatch(increment({ id: item.id, quantity: 1 }))
                              notify(`Your ${item.name} quantity has been increased to ${item.quantity}`)
                            }
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="fw-bold">
                        $
                        {
                        Math.round(
                          parseInt(item.amount) * item.quantity
                        ).toFixed(2)
                        
                        }
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      <SubTotal subTotal={subTotal} products={products} proceed={true}/>
      </>
      )}

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
const TD = styled.td`
  min-width: 18.75rem;
`

export default CartProducts;
