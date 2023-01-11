import React, { useEffect } from "react";
import { useState } from "react";
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

  useEffect(()=> {
    if(locals.length > 0){
      setSubTotal(locals?.map(({amount, quantity}) => {
        return Math.round(parseInt(amount)) * parseInt(quantity) ;
      }).reduce((total, item) => total += item))
      setChanged(!changed)
    }
  }, [locals])

  return (
    <div className="container">
      <div className="row row-cols-2 my-4 justify-content-evenly align-items-baseline gap-2">
        <div className="col-12 col-md-6">
          <ReviewItems />
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
