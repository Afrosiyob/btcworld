import React from "react";
import { Col, Row } from "antd";
import StatisticCard from "./StatisticCard/StatisticCard";
import StatisticChart from "./StatisticChart/StatisticChart";
import { useTranslation } from "react-i18next";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";

function Statistics() {
  const { t } =useTranslation();
  
  return (
    <div>
    <HelmetTitle title={t(`Admin.Titul2`)} />
      <h2 className="w-100 text-muted mb-3">{t(`Statistics.Titul`)}</h2>

      <Row gutter={[15, 15]}>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"white"}
            bgIcon={"rgb(222, 211, 255)"}
            bgShadow={"rgba(255, 255, 255, 0.5)"}
            iconClass={"fas fa-users"}
            iconColor={"rgb(95, 46, 234)"}
            titul={"8"}
            subTitul={t(`Statistics.Titul2`)}
            textColor={"black"}
          />
        </Col>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"white"}
            bgIcon={"rgb(222, 211, 255)"}
            bgShadow={"rgba(255, 255, 255, 0.5)"}
            iconClass={"fas fa-hand-holding-usd"}
            iconColor={"rgb(95, 46, 234)"}
            titul={"0 USD"}
            subTitul={t(`Statistics.Titul3`)}
            textColor={"black"}
          />
        </Col>
        <Col sm={12} md={8}>
          <StatisticCard
            bgColor={"white"}
            bgIcon={"rgb(222, 211, 255)"}
            bgShadow={"rgba(255, 255, 255, 0.5)"}
            iconClass={"fas fa-hand-holding-heart"}
            iconColor={"rgb(95, 46, 234)"}
            titul={"0 USD"}
            subTitul={t(`Statistics.Titul4`)}
            textColor={"black"}
          />
        </Col>
      </Row>

      <Row gutter={[15, 15]} className="my-5">
        <Col md={16} sm={12}>
          <StatisticChart />
        </Col>
        <Col sm={12} md={8}>
          <div className="mb-4">
            <h4 className="w-100 text-muted mb-3">{t(`Statistics.Titul`)}</h4>
            <StatisticCard
              bgColor={"#1CC8EE"}
              bgIcon={"rgba(255,255,255,0.37)"}
              bgShadow={"#ABF0FF"}
              iconClass={"fas fa-users"}
              iconColor={"white"}
              titul={"4"}
              subTitul={t(`Statistics.Titul5`)}
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
              subTitul={t(`Statistics.Titul6`)}
              textColor={"white"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Statistics;
