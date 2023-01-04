import React, { Fragment, useState } from "react";
import souqLogo from "../../images/souqLogo.png";
import ounass from "../../images/OunassLogo.jpg";
import amazon from "../../images/amazonLogo.png";
import groupon from "../../images/grouponLogo.png";
import SharafDG from "../../images/sharafDg.png";
import noonLogo from "../../images/noonLogo.png";
import styled from "styled-components";


const Brands = () => {
 const brandArray = [
    {
      name : "Souq.com",
      logo : souqLogo,
      description : "Souq.com, a popular online retailer in the Middle East."
    },
    {
      name : "Ounass.Ae",
      logo : ounass,
      description : "Ounass.ae is a comprehensive online marketplace that provides a single platform where customers can find their favourite products and brands."
    },
    {
      name : "Amazon.Ae",
      logo : amazon,
      description : "Amazon is the world's largest ecommerce platform and the most dominant player in the E-Commerce sector."
    },
    {
      name : "Groupon.Ae",
      logo : groupon,
      description : "The company is not simply a localised version of the US-based enterprise and expanding globally."
    },
    {
      name : "Sharafdg.Com",
      logo : SharafDG,
      description : "SharafDG is an eCommerce website in the U.A.E."
    },
    {
      name : "Noon.Com",
      logo : noonLogo,
      description : "The Noon website is an online shopping destination that offers various products at affordable prices."
    },
  ]


  return (
    <div className="container text-center">
      <h2 className="my-5 fw-bold text-center text-md-start">Popular Brands</h2>
        <div className="row row-gap-2">
        {
          brandArray.map((brand, index) => {
            return (
                <div key={index} className="bg-light col-12 col-md-4 border-3 border border-white">
                  <div className="row h-100 py-4 px-2 align-items-center">
                    <div className="col-12 col-md-3">
                      <Image src={brand.logo}  className="img-fluid rounded-circle my-3 my-md-0"  alt={brand.logo + " logo"} />
                    </div>
                    <div className=" col-12 col-md-9 align-items-center">
                      <H3 className="text-start">{brand.name}</H3>
                      <Description className="text-start">{brand.description}</Description>
                    </div>
                  </div>
                </div>
            )
          })
        }
        </div>
        </div>
  );
};


const Description = styled.p`
  font-size: .7rem;
`
const H3 = styled.h3`
  font-size: 1rem;
`
const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit:contain;
`
export default Brands;
