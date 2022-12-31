import React, { useEffect, useState } from "react";
import furniture from "../../images/furniture.avif";
import HeadPhones from "../../images/headPhones.avif";
import Bags from "../../images/bag.avif";
import laptop from "../../images/laptop.avif";
import Book from "../../images/book.avif";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css"

const Categories = () => {
  const [state, setState] = useState("")

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth>300 && window.innerWidth<=550){
        setState("sm")
      }
      if(window.innerWidth>551 && window.innerWidth<= 899){
        setState("md")
      }
      if(window.innerWidth > 899){
        setState("lg")
      }
   }

    window.addEventListener('resize', handleResize)

    return ()=> window.removeEventListener('resize', handleResize)
  })

  
  const categoryArray = [
    {
      id: Math.random() * 1000000,
      img: furniture,
      name: "Furniture",
    },
    {
      id: Math.random() * 1000000,
      img: HeadPhones,
      name: "HeadPhones",
    },
    {
      id: Math.random() * 1000000,
      img: Bags,
      name: "Bags",
    },
    {
      id: Math.random() * 1000000,
      img: laptop,
      name: "Laptop",
    },
    {
      id: Math.random() * 1000000,
      img: Book,
      name: "Book",
    },
  ];

  return (
    <div className="container my-4">
      <H2 className="fw-bold text-uppercase my-3">Shop Our Top Category</H2>
      <div className="row d-flex justify-content-md-between align-items-md-center gap-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={state === "sm" ? 1 : state === "md" ? 3 : 5}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {categoryArray.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {
                  <div
                 
                    className="col col-md-3 col-lg-2 my-3 my-lg-0"
                  >
                    <Cards className="card text-bg-dark rounded-pill">
                      <ImageStyles
                        src={item.img}
                        className="card-img img-fluid "
                        alt={item.name}
                      />

                      <div className="card-img-overlay">
                        <H3 className="card-title">{item.name}</H3>
                      </div>
                    </Cards>
                  </div>
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
const Cards = styled.div`
  height: 18.875rem;
  min-width: 10.5rem;
  border: none;
  cursor: pointer;
`;

const ImageStyles = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const H2 = styled.h2`
  font-size: 1.6rem;
`;

const H3 = styled.h3`
  font-size: 1.1rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
`;

export default Categories;
