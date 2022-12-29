import React from 'react'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Offers from './Component/Offers'
import Home from './Containers/Home/Home'
// import FilterProducts from './Containers/Products/FilterProducts'
// import ProductCheckout from './Containers/Products/ProductCheckout'
// import ProductDetail from './Containers/Products/ProductDetail'
import "../src/index.css"
import styled from 'styled-components'
const App = () => {
  return (
    <>
    <Wrapper className='container-fluid'>
     <Offers />
     </Wrapper>
     <Header />
     <Home />
     {/* <FilterProducts />
     <ProductDetail />
    <ProductCheckout /> */}
     <Footer />
    </>
  )
}

const Wrapper = styled.div`
  background : #013d29;
`

export default App

