import React, { Fragment } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Offers from "./Component/Offers";
import Home from "./Containers/Home/Home";
import { Routes, Route } from "react-router-dom";
import FilterProducts from './Containers/Products/FilterProducts';
import ProductDetail from "./Containers/Products/ProductDetail";
import "../src/index.css";
import ProductFavourites from "./Containers/Products/ProductFavourites"
import styled from "styled-components";
import OrderItems from "./Containers/Products/OrderItems";
import CartProducts from "./Containers/Products/CartProducts";
const App = () => {
  return (
    <Fragment>
      <Wrapper className="container-fluid">
        <Offers />
      </Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<FilterProducts />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/product/order" element={<OrderItems/>} />
        <Route path="/product/cart" element={<CartProducts/>} />
        <Route path="/product/favourites" element={<ProductFavourites/>}/>
      </Routes>
      <Footer />
    </Fragment>
  );
};

const Wrapper = styled.div`
  background: #198754;
`;

export default App;
