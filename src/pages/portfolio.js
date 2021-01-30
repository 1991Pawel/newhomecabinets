import React, { useState } from "react";
import "../style/pages/portfolio.scss";
import Slider from "react-slick";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";
import { Layout } from "../components/Layout/Layout";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <section className="portoflio">
        <div className="portfolio__image">
          <div className="portfolio__headings">
            <h2 className="portfolio__title">Portfolio</h2>
            <p className="portfolio__subtitle">check our work</p>
          </div>
        </div>
        <div className="slide-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
