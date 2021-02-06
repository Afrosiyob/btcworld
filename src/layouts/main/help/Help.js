import React, { useState } from "react";

import Ripples from "react-ripples";

import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Help.scss";
import { useTranslation } from "react-i18next";

import SignUp from "../signup/SignUp";

function Help() {
  const [t] = useTranslation();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="home-reg my-5 py-5 shadow-lg" id="section4">
      <h1 className="back-text">Business Trend Company </h1>

      <Container className="position-relative">
        <Row>
          <Col sm="12" md="5">
            <div className="left-box">
              <h1>Business Trend Company </h1>
              <h3>{t(`homeReg.Titul2`)}</h3>
            </div>
          </Col>
          <Col sm="12" md="5">
            <div className="right-box">
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button
                  onClick={toggle}
                  className="header-btn  px-5 py-2 rounded-pill"
                >
                  {t(`homeReg.Titul4`)}
                </button>
              </Ripples>
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button className="header-btn rounded-pill px-5 py-2">
                  {t(`homeReg.Titul3`)}
                </button>
              </Ripples>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <SignUp toggleModal={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Help;
