import React from "react";
import backgroundOne from "../../images/bg__1.avif";
import backgroundTwo from "../../images/bg__2.avif";
import backgroundThree from "../../images/bg__3.avif";

const Hero = () => {
  const imgStyle = {
    objectFit :" cover",
    height : "70vh",
    maxHeight:"100%",
  }

  return (
    <main className="container-fluid container-lg">
        {/* Boostrap slider */}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img
              loading="lazy"
                style={imgStyle}
                src={backgroundOne}
                className="d-block w-100 img-fluid"
                alt="Hero Image One"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
              loading="lazy"
              style={imgStyle}
                src={backgroundTwo}
                className="d-block w-100 img-fluid"
                alt="Herp Image Two"
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
              loading="lazy"
                style={imgStyle}
                src={backgroundThree}
                className="d-block w-100 img-fluid"
                alt="Hero Image Three"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </main>
  );
};

export default Hero;
