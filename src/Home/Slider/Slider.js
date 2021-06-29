import React from 'react';
import './Slider.scss';
const Slider = () => {
  return (
    <div className="slider" id="slider-container">
      <input type="radio" name="slider" value="1" id="slider1" defaultChecked />
      <input type="radio" name="slider" value="2" id="slider2" />
      <input type="radio" name="slider" value="3" id="slider3" />
      <input type="radio" name="slider" value="4" id="slider4" />
      <div className="sliders">
        <div className="overflow">
          <div className="inner">
            <div className="slide slide__1"></div>
            <div className="slide slide__2"></div>
            <div className="slide slide__3"></div>
            <div className="slide slide__4"></div>
          </div>
        </div>
      </div>
      <div className="controls">
        <label htmlFor="slider1"></label>
        <label htmlFor="slider2"></label>
        <label htmlFor="slider3"></label>
        <label htmlFor="slider4"></label>
      </div>
    </div>
  );
};

export default Slider;
