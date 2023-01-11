import React, { Fragment, useRef } from 'react'
import { useSelector } from 'react-redux';
import ProductDetailInfo from './ProductDetailInfo';

const CategoryProducts = () => {
  const displayImage = useRef();
  const { categoryList } = useSelector(
    (state) => state.productDetail
      );
  return (
    <>
   {
    categoryList?.map((item) => {
        const {
          id,
          title,
          description,
          discountPercentage,
          images,
          price,
          rating,
          stock,
          thumbnail,
        } = item;
        return (
          <Fragment key={id}>
            <div className="col">
              <div className="row text-center">
                <div className="col">
                  <img
                    ref={displayImage}
                    src={thumbnail}
                    className="rounded img-fluid"
                    alt="title image"
                    style={{ height: "21.875rem", width:"100%", objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="row row-cols-5 mt-2">
                {images?.map((image, index) => {
                  return (
                    <div
                      className={`text-center col mt-3 rounded bg-light ${
                        images.length === 4 ? "mx-auto" : "mx-auto"
                      }`}
                      key={index}
                    >
                      <img
                        onClick={(e) => {
                          displayImage.current.src = e.target.src;
                        }}
                        className="img-fluid"
                        style={{
                          objectFit: "contain",
                          height: "80px",
                          cursor: "pointer",
                        }}
                        src={image}
                        alt={title + " preview image"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <ProductDetailInfo
              id={Math.floor(Math.random() * 200000)}
              img={thumbnail}
              rating={rating}
              price={price}
              stock={stock}
              title={title}
              description={description}
              discountPercentage={discountPercentage}
            />
          </Fragment>
        );
      }) 
   }
    </>
  )
}

export default CategoryProducts
