import React from "react";

import "./About.scss";
import ImgOne from "../../../assets/images/photo_2021-01-13_12-14-03.jpg";
import ImgTwo from "../../../assets/images/photo_2021-01-13_12-14-17.jpg";
import ImgThree from "../../../assets/images/photo_2021-01-13_12-14-56.jpg";
import ImgFour from "../../../assets/images/photo_2021-01-13_12-15-10.jpg";

import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

function About() {
  const [ t ] = useTranslation();

  return (
    <div className="home-about my-5 py-5 shadow-lg">
      <Container>
        <h1 className="w-100 text-center font-weight-bold mb-4 position-relative">
        {t(`homeNavbar.aboute`)}
        </h1>
        <Row>
          <Col sm="12" md="6">
            <div className="left-box">
              <div className="left-item-box">
                {" "}
                <img
                  src={ImgOne}
                  alt="some data"
                />{" "}
                <img
                  src={ImgTwo}
                  alt="some data"
                />{" "}
              </div>
              <div className="right-item-box">
                {" "}
                <img
                  src={ImgThree}
                  alt="some data"
                />{" "}
                <img
                  src={ImgFour}
                  alt="some data"
                />{" "}
              </div>
            </div>
          </Col>
          <Col sm="12" md="6">
            <div className="right-box">
              <p>
                {" "}
                {t(`homeAbout.Title`)}
                </p>
              <p>
                {" "}
                {t(`homeAbout.Title2`)}
              </p>
              <p>
                {" "}
                {t(`homeAbout.Title3`)}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
