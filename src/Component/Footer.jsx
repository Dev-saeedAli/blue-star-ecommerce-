import React, { Fragment } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import styled from 'styled-components';
import visa from "../images/visa.png";
import googleWallet from "../images/symbol.png";
import americalExpress from "../images/symbol (2).png";
import paypal from "../images/paypal.png";
import applePay from  "../images/apple-pay.png";
import amazonPay from "../images/amazon-pay.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container text-center text-md-start mt-5 py-4 border-success'>
       <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 border border-bottom border-top border-start-0 border-success border-end-0 py-5">
         <div className="col">
          <div className="row">
            <div className="col-12">
            <BsFillCartFill size={30} color="green"/>
            <Small className='ms-1 text-success fw-bold'>BLUESTAR</Small>
          <P className='lh-base my-2'>Bluestar is the trading of goods and services on the internet. It is your bustling city center or brick-and-mortar shop translated into zeroes and ones on the internet superhighway.</P>
            </div>
            <div className="col-12 mt-3 text-center">
              <H3 className='fw-bold'>Accepted Payments</H3>
              <div className='mt-3 d-flex justify-content-start flex-wrap gap-3'>
             <a href="https://www.flaticon.com/free-icons/visa" target="_blank" title="visa icons">
             <PaymentCards src={visa} alt="visa image" />
             </a>
              
             <a href="https://www.flaticon.com/free-icons/google-wallet"  target="_blank" title="google wallet icons"> <PaymentCards src={googleWallet} alt="googlewallet  image" />
             </a>
             
             <a href="https://www.flaticon.com/free-icons/american-express"  target="_blank" title="american express icons"><PaymentCards src={americalExpress} alt="googlewallet  image" />
             </a>
              
             <a href="https://www.flaticon.com/free-icons/paypal"  target="_blank" title="paypal icons">     <PaymentCards src={paypal} alt="paypal card image" />
             </a>

             <a href="https://www.flaticon.com/free-icons/apple-pay"  target="_blank" title="apple pay icons"> <PaymentCards src={applePay} alt="applepay image" />
             </a>

         
             <a href="https://www.flaticon.com/free-icons/amazon-pay" title="amazon pay icons"> <PaymentCards src={amazonPay} alt="amazonpay image" /></a>
             
              </div>
            </div>
          </div>
         </div>
         <div className="col">
          <SubHeading className='fw-bold'>Departments</SubHeading>
            <ul className='navbar-nav my-3'>
              {
                ["Fashion", "Education Products",  "Beverages", "Beauty Products", "Books", "Electronic & Gadgets", "Fitness", "Snickers", "Travel Accessories", "Toys", "Furnitures"].map((item, index) => {
                  return (
                    <Fragment key={index}>
                    <LI  className="nav-item">
                      <a href='/' className='nav-link'>{item}</a>
                    </LI>
                    </Fragment>

                  )
                })
              }
            </ul>
         </div>
         <div className="col">
          <SubHeading className='fw-bold'>About Us</SubHeading>
          <ul className='navbar-nav my-3'>
              {
                ["About Bluestar", "Careers",  "News & Blogs", "Help", "Shop By Location", "Bluestar Brands", "Ideas & Guildlines", "Press Center", "Affiliates & Partners"].map((item, index) => {
                  return (
                    <Fragment key={index}>
                    <LI  className="nav-item">
                      <a href='/' className='nav-link'>{item}</a>
                    </LI>
                    </Fragment>
                  )
                })
              }
            </ul>
         </div>
         <div className="col">
         <SubHeading className='fw-bold'>Services</SubHeading>
          <ul className='navbar-nav my-3'>
              {
                ["Order Pickup", "Shipping & delivery",  "Gift Cards", "Account Signup", "Mobile App"].map((item, index) => {
                  return (
                    <Fragment key={index}>
                    <LI  className="nav-item">
                      <a href='/' className='nav-link'>{item}</a>
                    </LI>
                    </Fragment>
                  )
                })
              }
            </ul></div> 
         <div className="col">
         <SubHeading className='fw-bold'>Help</SubHeading>
          <ul className='navbar-nav my-3'>
              {
                ["Bluestar Help", "Returns",  "Feedback", "Contact Us", "Track Orders", "Security & Fraud"].map((item, index) => {
                  return (
                    <Fragment key={index}>
                    <LI  className="nav-item">
                      <a href='/' className='nav-link'>{item}</a>
                    </LI>
                    </Fragment>
                  )
                })
              }
            </ul>
         </div>
       </div>
       <div className='text-end pt-2'>
          <small className='fw-medium mx-auto'>&copy;copyright-bluestar.com. All rights reserved BlueStar | 2023</small>
       </div>
    </div>
  )
}

const P = styled.div`
  font-size: .8rem;
`

const H3 = styled.h3`
  font-size : 1.2rem
`
const SubHeading = styled.h3`
  font-size : 1rem
`
const Small = styled.small`
  font-size : 1.2rem
`
const LI = styled.li`
  font-size : .9rem;
  margin: .2rem 0;
`

const PaymentCards = styled.img`
  width:2.5375rem;
  object-fit:cover;
  cursor:pointer;
  margin:0 0 1rem;

`

export default Footer
