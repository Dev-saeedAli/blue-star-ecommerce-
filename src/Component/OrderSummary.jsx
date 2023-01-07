import React from "react";
import styled from "styled-components";

const OrderSummary = () => {
  return (
    <>
      <H4 className="fw-bold my-3">
        Enter your information to continue the delivery.
      </H4>
      <form>
        <div className="input-group gap-2">
          <div className="form-floating">
            <Input
              className="form-control shadow-none"
              type="text"
              placeholder="Enter your first name"
              id="firstName"
            />
            <Label className="form-label" htmlFor="firstName">
              First Name
            </Label>
          </div>
          <div className="form-floating">
            <Input
              className="form-control shadow-none"
              type="text"
              placeholder="Enter your last name"
              id="lastName"
            />
            <Label className="form-label" htmlFor="lastName">
              Last Name
            </Label>
          </div>
        </div>
        <div className="form-floating">
          <Input
            className="form-control shadow-none my-2"
            type="text"
            placeholder="Enter your street adress"
            id="street"
          />
          <Label className="form-label" htmlFor="street">
            Street Adress
          </Label>
        </div>
        <div className="input-group gap-2">
          <div className="form-floating">
            <Input
              className="form-control shadow-none"
              type="text"
              placeholder="Enter your City"
              id="city"
            />
            <Label className="form-label" htmlFor="city">
              City
            </Label>
          </div>
          <div className="form-floating">
            <Input
              className="form-control shadow-none"
              type="number"
              placeholder="Enter your zipcode"
              id="zipcode"
            />
            <Label className="form-label" htmlFor="zipcode">
              Zip code
            </Label>
          </div>
        </div>
        <div className="form-floating">
        <Input
              className="form-control shadow-none mt-2"
              type="number"
              placeholder="Enter your mobile number"
              id="mobile"
            />
            <Label className="form-label" htmlFor="mobile">
              Mobile Number
            </Label>
        </div>
        <div className="form-floating">
        <Input
              className="form-control shadow-none mt-2"
              type="email"
              placeholder="Enter your email id "
              id="email"
            />
            <Label className="form-label" htmlFor="email">
              Email ID
            </Label>
        </div>
      </form>
    </>
  );
};

const H4 = styled.h4`
  font-size: 1.1rem;
`;

const Input = styled.input`
  &:active,
  &:focus {
    border-color: #20c997;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
`;
export default OrderSummary;
