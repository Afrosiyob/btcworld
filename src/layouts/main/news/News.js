import React from "react";

import "./News.scss";

import { Container } from "reactstrap";
import ShapeDots from "./ShapeDots/ShapeDots";
import LeftShape from "./LeftShape/LeftShape";
import RightShape from "./RightShape/RightShape";
import ImgOne from "../../../assets/images/new1.jpg";
import ImgTwo from "../../../assets/images/new2.jpg";
import ImgThree from "../../../assets/images/new3.jpg";
import { useTranslation } from "react-i18next";

function News() {
  const [ t ] = useTranslation();

  return (
    <div className="home-pdf my-5 py-5 shadow-lg" id="section3">
      <LeftShape />
      <RightShape />

      <Container>
        <h1 className="w-100 text-center font-weight-bold mb-4 position-relative">
        {t(`homeHeader.Titul5`)}
        </h1>

        <div className="wrap-box">
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src={ImgOne}
                alt="item"
              />
            </div>
          </div>
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src={ImgTwo}
                alt="item"
              />
            </div>
          </div>
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src={ImgThree}
                alt="item"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default News;
