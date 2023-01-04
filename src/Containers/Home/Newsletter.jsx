import React from 'react';
import styled from 'styled-components';
import furnitureBanner from "../../images/furniture_banner.avif"

const Newsletter = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col p-0 position-relative">
          <Overlay className="overlay"></Overlay>
          <Images src={furnitureBanner} className="img-fluid object-object-fit-cover" alt="newletter image"/>
          <NewsLetterText className="container p-4 text-light rounded-5 mx-2 mx-md-0 text-center" >
              <h4 className='fw-bold'>Get 5% Cash <br/>Back on $200</h4>
              <p className='my-3 lh-lg'>Blue Star allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
              <button className="mx-auto btn btn-success rounded-pill">learn More</button>
          </NewsLetterText>
        </div>
      </div>
    </div>
  )
}


const Images = styled.img`
  object-fit:cover;
  width:100%;
  height:70vh;
`

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left:0px;
  width:100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3));
  -webkit-background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3));
  -moz-background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.3));
`

const NewsLetterText = styled.div`
position:absolute;
top:50%;
left:47%;
transform:translate(-50%, -50%);
background: linear-gradient(to bottom, #198754, rgba(95, 255, 95, 60%));
max-width: 18.75rem;


`
export default Newsletter
