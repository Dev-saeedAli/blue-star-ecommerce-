import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import styled from "styled-components";
import DeliveryDetails from "../../Component/DeliveryDetails";
import OrderSummary from "../../Component/OrderSummary";
import ReviewItems from "../../Component/ReviewItems";
import SubTotal from "../../Component/SubTotal";

const OrderItems = () => {
  const [subTotal, setSubTotal] = useState(0)
  const [changed, setChanged] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const locals = localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : []
  const navigate = useNavigate()
  useEffect(()=> {
    if(locals.length > 0){
      setSubTotal(locals?.map(({amount, quantity}) => { 
        return Math.round(parseInt(amount)) * parseInt(quantity) ;
      }).reduce((total, item) => total += item, 0))
    }// eslint-disable-next-line
  }, [changed])

  return (
    <div className="container">
      <div className="d-flex align-items-center my-4 text-success" style={{cursor:"pointer"}}  onClick={() => navigate('/')}>
       <IoMdArrowRoundBack style={{cursor:"pointer"}} size={50}/>
       <strong className="fw-bold" style={{fontSize: "1.3rem"}}>Back</strong>
      </div>
      <div className="row row-cols-2 my-4 justify-content-evenly align-items-baseline gap-2">
        <div className="col-12 col-md-6">
          <ReviewItems changed={changed} setChanged={setChanged} />
          <div className="row">
            <div className="col border border-2">
              <DeliveryDetails
                firstName={firstName}
                lastName={lastName}
                address={address}
                zipcode={zipcode}
                mobile={mobile}
                email={email}
                city={city}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 border border-2 p-4">
          <H4 className="fw-bold text-center text-md-start">Order Summary</H4>
          <OrderSummary
            firstName={firstName}
            lastName={lastName}
            address={address}
            zipcode={zipcode}
            mobile={mobile}
            email={email}
            city={city}
            setAddress={setAddress}
            setZipcode={setZipcode}
            setMobile={setMobile}
            setEmail={setEmail}
            setCity={setCity}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
           <div className="col-12 my-5">
            <SubTotal subTotal={subTotal} products={locals} proceed={false}/>
        </div>
        </div>
      </div>
    </div>
  );
};

const H4 = styled.h4`
  font-size: 1.4rem;
`;

export default OrderItems;
