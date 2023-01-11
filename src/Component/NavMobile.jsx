import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

const NavMobile = () => {
  const { products } = useSelector((state) => state.cartItems);
  const navigate = useNavigate()
  const { favouriteList } = useSelector((state) => state.favourites);

  return (
    <>
      <nav className="navbar bg-body-tertiary d-lg-none d-block">
        <div className="container-fluid container-lg">
          <Link className="navbar-brand" to="/">
            <span className="d-flex align-items-center">
              <AiOutlineShoppingCart size={30} className="text-success" />
              <H1>Blue Star</H1>
            </span>
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="d-block d-lg-none navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <span className="d-flex align-items-center gap-2">
                  <AiOutlineShoppingCart size={30} className="text-info" />
                  <H1>Blue Star</H1>
                </span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Furniture
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        HeadPhone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Bag
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Laptop
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Book
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Deals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Whats New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Delivery
                  </a>
                </li>
              </ul>
              <hr className="divider" />
              <Form />
              <div className="col d-flex align-items-center gap-4 mt-5 justify-content-center" >
                <Small className="position-relative"  style={{cursor:"pointer"}} onClick={() => navigate('/product/favourites')}>
                <FaHeart size={30} onClick={() => navigate('/product/favourites')} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favouriteList.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Small>
                <Small className="position-relative"  style={{cursor:"pointer"}} onClick={() => navigate('/product/cart')}>
                <BsFillCartFill size={30}/>
                  {" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {products.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Small>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Small = styled.small`
  font-size: 1rem;
  font-weight: bold;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight:bold;
`;
export default NavMobile;
