import React, { useEffect } from "react";
import smartPhone from "../../images/smart_phone.avif";
import fragrance from "../../images/fragrance.avif";
import computers from "../../images/computers.avif";
import skincare from "../../images/skincare.avif";
import groceries from "../../images/groceries.avif";
import homeDecoration from "../../images/home-decoration.avif";
import homeAndFurniture from "../../images/home-and-furniture.avif";
import womenTops from "../../images/women-tops.avif";
import womenDresses from "../../images/women-dresses.avif";
import womenShoes from "../../images/women-shoes.avif";
import menShirt from "../../images/mens-shirt.avif";
import menShoes from "../../images/mens-shoes.avif";
import menWatch from "../../images/mens-watches.avif";
import womenWatch from "../../images/womens-watches.avif";
import womenBags from "../../images/womens-bags.avif";
import womenJewel from "../../images/womens-jewellery.avif";
import sunGlasses from "../../images/sunglasses.avif";
import automotive from "../../images/automotive.avif";
import motorcycle from "../../images/motorcycle.avif";
import lighting from "../../images/lighting.avif";
import errorImage from "../../images/error-404.webp";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../app/features/categorySlice/categorySlice";
import Spinner from "../../Component/Spinner";
import { Link} from "react-router-dom"
import { fetchFilterList } from "../../app/features/filterCategorySlice/filterCategorySlice";

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
              {categories?.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    {
                      <div className="col col-md-3 col-lg-2 my-3 my-lg-0">
                        <Link to={`/products/${category}`}>
                        <Cards className="card text-bg-dark rounded-pill" onClick={() => {
                           dispatch(fetchFilterList(category))
                        }}>
                          <ImageStyles
                            loading="lazy"
                            src={
                              //! loading images depends upon category 
                              category === "smartphones"
                                ? smartPhone
                                : category === "laptops"
                                ? computers
                                : category === "fragrances"
                                ? fragrance
                                : category === "skincare"
                                ? skincare
                                : category === "groceries"
                                ? groceries
                                : category === "home-decoration"
                                ? homeDecoration
                                : category === "furniture"
                                ? homeAndFurniture
                                : category === "tops"
                                ? womenTops
                                : category === "womens-dresses"
                                ? womenDresses
                                : category === "womens-shoes"
                                ? womenShoes
                                : category === "mens-shirts"
                                ? menShirt
                                : category === "mens-shoes"
                                ? menShoes
                                : category === "mens-watches"
                                ? menWatch
                                : category === "womens-watches"
                                ? womenWatch
                                : category === "womens-bags"
                                ? womenBags
                                : category === "womens-jewellery"
                                ? womenJewel
                                : category === "sunglasses"
                                ? sunGlasses
                                : category === "automotive"
                                ? automotive
                                : category === "motorcycle"
                                ? motorcycle
                                : category === "lighting"
                                ? lighting
                                : errorImage
                            }
                            className="card-img img-fluid "
                            alt={category+ "image"}
                          />
  
                          <div className="card-img-overlay">
                            <H3 className="card-title">{category}</H3>
                          </div>
                        </Cards>
                        </Link>
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
