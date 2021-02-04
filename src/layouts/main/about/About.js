import React from "react";

import "./About.scss";

import { Col, Container, Row } from "reactstrap";

function About() {
  return (
    <div className="home-about my-5 py-5 shadow-lg">
      <Container>
        <h1 className="w-100 text-center font-weight-bold mb-4 position-relative">
          About Us
        </h1>
        <Row>
          <Col sm="12" md="6">
            <div className="left-box">
              <div className="left-item-box">
                {" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
              </div>
              <div className="right-item-box">
                {" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
              </div>
            </div>
          </Col>
          <Col sm="12" md="6">
            <div className="right-box">
              <p>
                {" "}
                BUSINESS TREND COMPANY Who are we? We are a multidisciplinary
                society. Knowledge of various fields, business trainings,
                high-quality internships in travel and business, highly
                profitable matrix models, the best quality of Internet services
                in social networks, high-quality and reliable purchases from us.
                The charity event is funded by BUSINESS TREND.
              </p>
              <p>
                {" "}
                The main principle is honesty with partners, transparency of
                work and, of course, high income.Thousands of people who decided
                to develop with us have already tried it and achieved high
                results.
              </p>
              <p>
                {" "}
                The main principle is honesty with partners, transparency of
                work and, of course, high income. Thousands of people who
                decided to develop with us have already tried it and achieved
                high results.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
