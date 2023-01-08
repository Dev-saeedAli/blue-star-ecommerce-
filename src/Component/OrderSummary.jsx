import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const OrderSummary = ({ firstName, lastName, address, city,  zipcode, mobile, email,setFirstName, setLastName, setAddress, setZipcode, setMobile, setEmail, setCity}) => {
  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    setFirstName("")
    setLastName("")
    setAddress("")
    setCity("")
    setZipcode("")
    setMobile("")
    setEmail("")
    localStorage.removeItem('order')
    navigate('/')
  }
  return (
    <>
      <H4 className="fw-bold my-3">
        Enter your information to continue the delivery.
      </H4>
      <form onSubmit={submitForm}>
        <div className="input-group gap-2">
          <div className="form-floating">
            <Input
              className="form-control shadow-none"
              type="text"
              placeholder="Enter your first name"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
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
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
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
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
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
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
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
              value={zipcode}
              onChange={(e) => {
                setZipcode(e.target.value);
              }}
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
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label className="form-label" htmlFor="email">
            Email ID
          </Label>
        </div>
        <button type="submit" className="btn btn-success w-100 mt-3">Proceed To Checkout</button>
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
