import React from "react";
import furniture from "../../images/furniture.avif";
import HeadPhones from "../../images/headPhones.avif";
import Bags from "../../images/bag.avif";
import laptop from "../../images/laptop.avif";
import Book from "../../images/book.avif";
import Tech from "../../images/tech.avif";
import Travel from "../../images/travel.avif";
import Beauty from "../../images/beauty.avif";
import Snickers from "../../images/snickers.avif";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
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
    {
      id: Math.random() * 1000000,
      img: Tech,
      name: "Tech",
    },
    {
      id: Math.random() * 1000000,
      img: Snickers,
      name: "Snickers",
    },
    {
      id: Math.random() * 1000000,
      img: Beauty,
      name: "Beauty",
    },
    {
      id: Math.random() * 1000000,
      img: Travel,
      name: "Travel",
    },
  ];

  return (
    <section className="container my-4">
      <H2 className="fw-bold text-uppercase my-3 mx-0">Shop Our Top Category</H2>
      <div className="container-fluid container-lg p-lg-0">
        <div className="row d-flex align-items-md-center justify-content-start">
          <Swiper
            spaceBetween={5}
            breakpoints={{
              // when window width is >= 300px
              300: {
                width: 300,
                slidesPerView: 1,
              },
              640: {
                width: 640,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 4,
              },
              1024: {
                width: 1024,
                slidesPerView: 4,
              },
            }}
          >
            {categoryArray.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  {
                    <div className="col col-md-3 col-lg-2 my-3 my-lg-0">
                      <Cards className="card text-bg-dark rounded-pill">
                        <ImageStyles
                        loading="lazy"
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
    </section>
  );
};
const Cards = styled.div`
  height: 18.875rem;
  min-width: 11.5rem;
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
