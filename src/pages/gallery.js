import React, { useState } from "react";
import "../style/pages/portfolio.scss";
import { graphql, useStaticQuery } from "gatsby";
import { Background } from "../components/Background/Background";

import Slider from "react-slick";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";
import slide6 from "../images/slide6.jpg";
import slide7 from "../images/slide7.jpg";
import slide8 from "../images/slide8.jpg";
import slide9 from "../images/slide9.jpg";
import slide10 from "../images/slide10.jpg";
import { Layout } from "../components/Layout/Layout";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5,slide6,slide7,slide8,slide9,slide10];

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg-portfolio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
    lazyLoad: false,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 1,
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
        {/* <Background
          title="Portoflio"
          subtitle="check our work"
          fluidUrl={data.file.childImageSharp.fluid}
        /> */}
        <div className="slide-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img className="slide__img" src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
