import * as React from "react";
import "../style/main.scss";
import { graphql, useStaticQuery } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];

// markup
const IndexPage = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <Layout>
      <div className="wrapper">
        <section className="intro">
          <div className="intro__slider">
            {slides.map((slide, i) => (
              <div key={i} className="slider">
                <div className="slider__inner">
                  <img
                    className={i === activeSlide ? "active" : null}
                    src={slide}
                    alt="slide image"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="intro__slogan">
            <p>make your dream come true.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
