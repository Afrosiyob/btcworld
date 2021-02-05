import React from "react";
import { Col, Row } from "antd";
import StatisticCard from "./StatisticCard/StatisticCard";
import StatisticChart from "./StatisticChart/StatisticChart";

function Statistics() {
  return (
    <div>
      <h2 className="w-100 text-muted mb-3">Total in team</h2>

      <Row gutter={[15, 15]}>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"#1CC8EE"}
            bgIcon={"rgba(255,255,255,0.37)"}
            bgShadow={"#ABF0FF"}
            iconClass={"fas fa-users"}
            iconColor={"white"}
            titul={"4"}
            subTitul={"Personally invited"}
            textColor={"white"}
          />
        </Col>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"#1CC8EE"}
            bgIcon={"rgba(255,255,255,0.37)"}
            bgShadow={"#ABF0FF"}
            iconClass={"fas fa-users"}
            iconColor={"white"}
            titul={"4"}
            subTitul={"Personally invited"}
            textColor={"white"}
          />
        </Col>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"#1CC8EE"}
            bgIcon={"rgba(255,255,255,0.37)"}
            bgShadow={"#ABF0FF"}
            iconClass={"fas fa-users"}
            iconColor={"white"}
            titul={"4"}
            subTitul={"Personally invited"}
            textColor={"white"}
          />
        </Col>
      </Row>

      <Row gutter={[15, 15]} className="my-5">
        <Col md={16} sm={12}>
          <StatisticChart />
        </Col>
        <Col sm={12} md={8}>
          <div className="mb-4">
            <h4 className="w-100 text-muted mb-3">Total in team</h4>
            <StatisticCard
              bgColor={"#1CC8EE"}
              bgIcon={"rgba(255,255,255,0.37)"}
              bgShadow={"#ABF0FF"}
              iconClass={"fas fa-users"}
              iconColor={"white"}
              titul={"4"}
              subTitul={"Personally invited"}
              textColor={"white"}
            />
          </div>
          <div className="mb-4">
            <h4 className="w-100 text-muted mb-3">Structure turnover</h4>
            <StatisticCard
              bgColor={"#F4B740"}
              bgIcon={"rgba(255,255,255,0.37)"}
              bgShadow={"#FFD98E"}
              iconClass={"fas fa-level-down-alt"}
              iconColor={"white"}
              titul={"0.00 USD"}
              subTitul={"Total"}
              textColor={"white"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Statistics;
