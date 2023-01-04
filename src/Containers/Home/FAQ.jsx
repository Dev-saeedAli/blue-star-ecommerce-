import React from 'react'
import customerService from "../../images/customer__service.avif"
import onlinePayment from "../../images/online__payment.avif"
import homeDelivery from "../../images/home__delivery.avif"
import styled from 'styled-components'

const FilterCategories = () => {

  const centerStyle = {height: "530px", display:'flex', flexDirection:"column", justifyContent: "space-between", alignItems:"center"}
  return (
    <div className='container text-center'>
      <h3 className='fw-bold my-5 text-center text-md-start'>Services To Help You</h3>
      <div className="row justify-content-center column-gap-4 row-gap-5">
        <div className="h-auto col-12 col-md-4 col-lg-3 bg-light p-0 pt-3 rounded-3" style={centerStyle}>
          <div  className='py-3'>
          <h4 className='px-2 fw-bold my-2'>24/7 Customer Support</h4>
          <p className=' px-2 my-3 lh-lg'>Offering amazing customer service is important if you want to retain customers and grow your business.</p>
          </div>
          <Images loading='lazy' className='img-fluid ' src={customerService} alt="customer support image" />
        </div>
        <div className="h-auto col-12 col-md-4 col-lg-3 bg-light p-0 pt-3 rounded-3" style={centerStyle}>
          <div className='py-3'>
          <h4 className='px-2 fw-bold my-2'>Online Payment Process</h4>
          <p className=' px-2 my-3 lh-lg'>Online payment allows you to pay money via the internet.</p>
          </div>
          <Images loading='lazy' className='img-fluid ' src={onlinePayment} alt="payment process image" />
        </div>
        <div className="h-auto col-12 col-md-4 col-lg-3 bg-light p-0 pt-3 rounded-3" style={centerStyle}>
          <div className='py-3'>
          <h4 className='px-2 fw-bold my-2'>Home Delivery Options</h4>
          <p className=' px-2 my-3 lh-lg'>Home delivery is the bringing of items to the customer's home rather than the customer collecting them from the store.</p>
          </div>
          <Images loading='lazy' className='img-fluid ' src={homeDelivery} alt="home delivery image" />
        </div>
      </div>
    </div>

  )
}


const Images = styled.img`
  object-fit:cover;
  height : 12.5rem;
  width:100%;
`
// const Row = styled.div`
//   height : 70vh;
// `

export default FilterCategories
