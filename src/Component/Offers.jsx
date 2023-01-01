import React from "react";
import { BsTelephoneForward } from "react-icons/bs";
import styled from "styled-components";

const Offers = () => {

  return (
      <div className="container-fluid container-lg py-2 text-light">
        <div className="row text-center">
          <div className=" my-1 my-md-0 col-sm col-md-4 justify-content-center d-flex align-items-center justify-content-md-start">
            <BsTelephoneForward />
            <span>+000093499989</span>
          </div>
          <div className=" my-1 my-md-0 col-sm col-md-4 justify-content-center">
            <Para className="lead">Get 50% off on selected Items | Shop Now</Para>
          </div>
          <div className=" my-1 my-md-0 col-sm col-md-4 justify-content-center d-flex align-items-center justify-content-md-center">
            <form className="d-flex justify-content-center justify-content-md-end w-100 gap-3">
              <Select className="form-form-select" name="languages" id="languages">
                <Option value="">Eng</Option>
                <Option value="arab">Arab</Option>
              </Select>
              <Select  className=" my-1 my-md-0 form-form-select" name="location" id="location">
                <Option value="">Location</Option>
                <Option value="india">India</Option>
                <Option value="uae">Uae</Option>
                <Option value="usa">USA</Option>
              </Select>
            </form>
          </div>
        </div>
      </div>
  );
};


const Para = styled.p`
  font-size :1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Select = styled.select`
    background: none;
    padding: 0.3rem;
    outline: none;
    border: none;
    color: white;
    cursor:pointer;
`
const Option = styled.option`
 color:black;
`

export default Offers;
