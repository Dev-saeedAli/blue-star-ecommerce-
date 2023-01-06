import React from "react";
import styled from "styled-components";
import bags from "../../images/bag.avif";

const ShoppingCart = () => {
  return (
    <div className="container">
      <div className="row row-cols-2 my-4">
        <div className="col-6">
            <h4 className="fw-bold text-capitalize my-3">
              Review Item and Shipping
            </h4>
          <div className="row align-items-center py-3 my-2 border">
            <div className="col-2">
              <img src={bags} width="100%" alt="" />
            </div>
            <div className="col-10">
              <div className="row d-flex  justify-content-between align-items-center">
                <div className="col-6 flex-grow-1">
                  <H4 className="fw-bold text-capitalize">Air bags Item</H4>
                </div>
                <div className="col text-center">
                  <p className="fw-bold">$400</p>
                  <p>Quantity: 01</p>
                  <button className="btn btn-outline-danger border-0 text-decoration-underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          upiditate repellat at! Nisi, aliquid hic asperiores quos facilis, vero
          tempora cum dolore dolorem quo itaque. Voluptatem suscipit doloremque
          possimus ea maiores pariatur non, debitis soluta voluptas explicabo
          unde vel et earum. Magnam modi architecto qui sint expedita magni
          reprehenderit dolore explicabo laudantium tempore placeat, repellendus
          excepturi aliquid corporis deleniti omnis! Vitae tempore quaerat
          aliquid voluptates commodi fugit optio mollitia totam veritatis
          obcaecati. Vitae nemo sed, eaque consectetur eveniet voluptas facilis
          reiciendis. Inventore odio magni beatae ipsum nisi obcaecati voluptas
          itaque quis laudantium delectus. upiditate repellat at! Nisi, aliquid
          hic asperiores quos facilis, vero tempora cum dolore dolorem quo
          itaque. Voluptatem suscipit doloremque possimus ea maiores pariatur
          non, debitis soluta voluptas explicabo unde vel et earum. Magnam modi
          architecto qui sint expedita magni reprehenderit dolore explicabo
          laudantium tempore placeat, repellendus excepturi aliquid corporis
          deleniti omnis! Vitae tempore quaerat aliquid voluptates commodi fugit
          optio mollitia totam veritatis obcaecati. Vitae nemo sed, eaque
          consectetur eveniet voluptas facilis reiciendis. Inventore odio magni
          beatae ipsum nisi obcaecati voluptas itaque quis laudantium delectus.
          upiditate repellat at! Nisi, aliquid hic asperiores quos facilis, vero
          tempora cum dolore dolorem quo itaque. Voluptatem suscipit doloremque
          possimus ea maiores pariatur non, debitis soluta voluptas explicabo
          unde vel et earum. Magnam modi architecto qui sint expedita magni
          reprehenderit dolore explicabo laudantium tempore placeat, repellendus
          excepturi aliquid corporis deleniti omnis! Vitae tempore quaerat
          aliquid voluptates commodi fugit optio mollitia totam veritatis
          obcaecati. Vitae nemo sed, eaque consectetur eveniet voluptas facilis
          reiciendis. Inventore odio magni beatae ipsum nisi obcaecati voluptas
          itaque quis laudantium delectus.
        </div>
      </div>
    </div>
  );
};

const H4 = styled.h4`
  font-size: 1.2rem;
`;

export default ShoppingCart;
