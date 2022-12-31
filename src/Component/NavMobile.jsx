import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
// import { BsFillCartFill } from "react-icons/bs";
// import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
import Form from './Form';

const NavMobile = () => {
    return (
        <>
          <nav className="navbar bg-body-tertiary d-lg-none d-block">
        <div className="container-fluid container-lg">
          <a className="navbar-brand" href="/">
            <span className="d-flex align-items-center">
              <AiOutlineShoppingCart size={30} className="text-info" />
              <H1>Blue Star</H1>
            </span>
          </a>
          <button
            className="navbar-toggler"
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
                <hr className="divider"/>
              <Form/>
              <div className="col d-flex align-items-center gap-3 mt-5 justify-content-center">
              <FaUserAlt />
              <Small>Account</Small>
              <BsFillCartFill />
              <Small>Cart</Small>
            </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  )
}

const Small = styled.small`
  font-size: 1rem;
  font-weight: bold;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`;
export default NavMobile
