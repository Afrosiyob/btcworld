import React from "react";
import Slider from "react-slick";
import "./HomeHeaderSlider.scss";
import ImgOne from "../../../../assets/images/photo_2021-01-13_12-14-51.jpg";
import ImgTwo from "../../../../assets/images/photo_2021-01-13_12-15-04.jpg";
import ImgThree from "../../../../assets/images/photo_2021-01-13_12-14-45.jpg";
import ImgFour from "../../../../assets/images/photo_2021-01-13_12-14-39.jpg";

function HomeHeaderSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="wrap-slick-slider  overflow-hidden  shadow-lg">
      <Slider {...settings}>
        <div className="slider-item">
          <img
            src={ImgOne}
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={ImgTwo}
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={ImgThree}
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={ImgFour}
            alt="headerSrc"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeHeaderSlider;
