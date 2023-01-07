import React from "react";
import styled from "styled-components";

const DeliveryDetails = () => {
  return (
    <>
      <h4 className="my-3">Delivery Information</h4>
      <p className="fw-bold my-3">
        Name : <Span className="fw-medium ms-3">Mohammed Said</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Address : <Span className="fw-medium ms-3">Po box 222 uaq uae</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        City : <Span className="fw-medium ms-3">Bazar </Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Zipcode: <Span className="fw-medium ms-3">1111</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Mobile: <Span className="fw-medium ms-3">1234 123 123</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Email: <Span className="fw-medium ms-3">google@email.com</Span>{" "}
      </p>
    </>
  );
};

const Span = styled.span`
  color: grey;
`;

export default DeliveryDetails;
