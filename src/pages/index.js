import * as React  from "react";
import "../style/main.scss";
import { Header } from "../components/Header/Header";
import {Footer} from '../components/Footer/Footer'
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";

const slides = [slide1,slide2,slide3,slide4,slide5];

// markup
const IndexPage = () => {
  const [activeSlide,setActiveSlide] = React.useState(0)
React.useEffect(() => {
    const interval = setInterval(() => { 
   
      setActiveSlide((prev) => (prev + 1) % slides.length) 
    
    }, 4000);
      
  
  
    return () => clearInterval(interval);
 
  },[activeSlide])


  return (
    <>
    <main className="container">
    <Header/>
    <div className="intro">
      <div className="intro__slider">
       {slides.map((slide,i) => (
        <div key={i} className="slider">
             <div className="slider__inner">
              <img className={i === activeSlide ? 'active' : null} src={slide} alt="test" />
            </div> 
          </div>
      ))} 
      </div>
      </div>
     <Footer/>
    </main>
    </>
  );
};

export default IndexPage;
