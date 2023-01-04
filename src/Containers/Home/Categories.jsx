import React, { useEffect } from "react";
import mensFashion from "../../images/mens-fashion.avif";
import womenFashion from "../../images/womens-fashion.avif";
import jewlaryAndWatches from "../../images/jewlary-and-watches.avif";
import bagsAndShoes from "../../images/bags-and-shoes.avif";
import computers from "../../images/computers.avif";
import phoneAndTablets from "../../images/phone-and-tablets.avif";
import toolsAndHardware from "../../images/tools-and-hardware.avif";
import homeAndFurniture from "../../images/home-and-furniture.avif";
import tech from "../../images/tech.avif";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../app/features/categorySlice/categorySlice";
import Spinner from "../../Component/Spinner";

const Categories = () => {
  const {loading, categories} = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());

    return () => dispatch(fetchCategories());
  }, []);

  return (
    <section className="container my-4">
      <H2 className="fw-bold text-uppercase my-3 mt-5 mx-0">
        Shop Our Top Category
      </H2>
      <div className="container-fluid container-lg p-lg-0">
        <div className="row d-flex align-items-md-center justify-content-start">
          {loading ? 
          
          <div className="row row-cols-1 row-cols-md-4 g-4" style={{minHeight: "70vh"}}>
            <Spinner/>
          </div> :(
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
              {categories.map((category) => {
                const { _id, slug, name } = category;
                return (
                  <SwiperSlide key={_id}>
                    {
                      <div className="col col-md-3 col-lg-2 my-3 my-lg-0">
                        <Cards className="card text-bg-dark rounded-pill">
                          <ImageStyles
                            loading="lazy"
                            src={
                              slug === `mens-fashion`
                                ? mensFashion
                                : slug === "womens-fashion"
                                ? womenFashion
                                : slug === "jewlary-and-watches"
                                ? jewlaryAndWatches
                                : slug === "bags-and-shoes"
                                ? bagsAndShoes
                                : slug === "computers"
                                ? computers
                                : slug === "phone-and-tablets"
                                ? phoneAndTablets
                                : slug === "tools-and-hardware"
                                ? toolsAndHardware
                                : slug === "home-and-furniture"
                                ? homeAndFurniture
                                : tech
                            }
                            className="card-img img-fluid "
                            alt={name}
                          />
  
                          <div className="card-img-overlay">
                            <H3 className="card-title">{name}</H3>
                          </div>
                        </Cards>
                      </div>
                    }
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
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
