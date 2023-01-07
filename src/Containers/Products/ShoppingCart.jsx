import React from "react";
import styled from "styled-components";
import DeliveryDetails from "../../Component/DeliveryDetails";
import OrderSummary from "../../Component/OrderSummary";
import ReviewItems from "../../Component/ReviewItems";

const OrderItems = () => {

  return (
    <div className="container">
      <div className="row row-cols-2 my-4 justify-content-evenly align-items-baseline">
        <div className="col-12 col-lg-6">
          <ReviewItems />
          <div className="row">
            <div className="col border border-2">
              <DeliveryDetails />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 border border-2 p-4">
        <H4 className="fw-bold text-center text-md-start">Order Summary</H4>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

const H4 = styled.h4`
    font-size : 1.4rem;
`

export default OrderItems;
