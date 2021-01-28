import * as React from "react";
import "../style/main.scss";
import {Navigation} from '../components/Navigation/Navigation';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'





// markup
const IndexPage = () => {
  return (
    <main>
    <Navigation/>
    <div className="slider-container">
      <div className="slider">
      <div className="slider__inner">
      <h2 className="slider__title">Slider text</h2>
      <p className="slider__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptates sint qui quas adipisci placeat corporis.</p>
      <img src={slide1} alt="test"/>
      </div>
      </div>
      <div className="slider">
      <div className="slider__inner">
      <h2 className="slider__title">Slider text</h2>
      <p className="slider__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptates sint qui quas adipisci placeat corporis.</p>
      <img src={slide2} alt="test"/>
      </div>
     
      </div>
      <div className="slider">
      <div className="slider__inner">
      <h2 className="slider__title">Slider text</h2>
      <p className="slider__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptates sint qui quas adipisci placeat corporis.</p>
      <img src={slide3} alt="test"/>
      </div>
     
      </div>
      <div className="slider">
      <div className="slider__inner">
      <h2 className="slider__title">Slider text</h2>
      <p className="slider__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptates sint qui quas adipisci placeat corporis.</p>
      <img src={slide4} alt="test"/>
      </div>
     
      </div>
      <div className="slider">
      <div className="slider__inner">
      <h2 className="slider__title">Slider text</h2>
      <p className="slider__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptates sint qui quas adipisci placeat corporis.</p>
      <img src={slide5} alt="test"/>
      </div>
     
      </div>
    
     
</div>
    
    </main>
  );
};

export default IndexPage;
