import React from "react";
import styled from "styled-components";

const DeliveryDetails = ({ firstName, lastName, address, city,  zipcode, mobile, email}) => {
  return (
    <>
      <h4 className="my-3">Delivery Information</h4>
      <p className="fw-bold my-3">
        Name : <Span className="fw-medium ms-3">{firstName} {" "} {lastName}</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Address : <Span className="fw-medium ms-3">{address}</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        City : <Span className="fw-medium ms-3">{city}</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Zipcode: <Span className="fw-medium ms-3">{zipcode}</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Mobile: <Span className="fw-medium ms-3">{mobile}</Span>{" "}
      </p>
      <p className="fw-bold my-3">
        Email: <Span className="fw-medium ms-3">{email}</Span>{" "}
      </p>
    </>
  );
};

const Span = styled.span`
  color: black;
  background:yellow;
`;

export default DeliveryDetails;
