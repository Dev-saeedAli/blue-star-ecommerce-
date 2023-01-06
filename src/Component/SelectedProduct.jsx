import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import ProductDetailInfo from './ProductDetailInfo';

const SelectedProduct = () => {
    const { selectedList } = useSelector(
        (state) => state.productDetail
      );


      return (
        <>
        {
             selectedList.map((list) => {
                const { id, title, description, rating, image, price } = list;
                return (
                  <Fragment key={id}>
                    <div className="col">
                    
                          <img
                            src={image}
                            className="rounded img-fluid"
                            alt="title image"
                            style={{ height: "30rem",width:"100%", objectFit: "contain" }}
                          />
               
                    </div>
                    <ProductDetailInfo
                      id={Math.floor(Math.random() * 200000)}
                      img={image}
                      rating={rating.rate}
                      price={price}
                      stock={rating.count}
                      title={title}
                      description={description}
                    />
                  </Fragment>
                );
              })
        }
        </>
      )
}

export default SelectedProduct;
