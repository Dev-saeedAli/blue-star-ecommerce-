import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="row  d-flex align-items-center h-100 w-100 py-2">
            <div className="col d-flex align-items-center justify-content-start">
            <a className="navbar-brand" href="/"> 
            <span className="d-flex align-items-center">
              <AiOutlineShoppingCart size={30} className="text-info"/>
              <H1>Blue Star</H1>
              </span>
          </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="col-md-8" id="navbarToggleExternalContent">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex gap-2 justify-content-center align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
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
                <a className="nav-link" href="/">
                  Deals
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/">
                  New
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/">
                  Delivery
                </a>
              </li>
              <form className="d-flex" role="search">
                <label htmlFor="form-label"></label>
                <div className="form-group d-flex justify-space-around bg-white rounded-pill">
                  <input
                    className="form-control me-2 bg-transparent border-0"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                    id="form-label"
                  />
                  <button
                    className="btn btn-outline-success border-0"
                    type="submit"
                  >
                    <AiOutlineSearch />
                  </button>
                </div>
              </form>
            </ul>
            </div>
            <div className="col d-flex align-items-center gap-3">
               <FaUserAlt/><Small>Account</Small>
               <BsFillCartFill/><Small>Cart</Small>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Small = styled.small`
 font-size : 1rem;
 font-weight:bold;
`

const H1 = styled.h1`
font-size : 1.5rem;

`



export default Header;
