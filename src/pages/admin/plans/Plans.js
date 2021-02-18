import { Button, Col, Result, Row } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { getPlans } from "../../../store/plans/action";
import PlanCard from "./planCard/PlanCard";

function Plans() {
  let history = useHistory();

  const { plans, getLoading } = useSelector((state) => state.plansReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <div className="plans-style">
      <HelmetTitle title={t(`Admin.Titul5`)} />

      <Row
        gutter={[8, 8]}
        className="mb-3"
        justify="space-between"
        align="middle"
      >
        <Col>
          <h2 className="w-100 text-muted mb-3">{t(`Admin.Titul5`)}</h2>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        {plans ? (
          plans.map((item, index) => (
            <PlanCard item={item} index={index} getLoading={getLoading} />
          ))
        ) : (
          <Result
            status="404"
            subTitle={t(`plans.Titul`)}
            extra={
              <Button onClick={() => history.goBack()} type="primary">
                {t(`plans.Titul2`)}
              </Button>
            }
          />
        )}
      </Row>
    </div>
  );
}

export default Plans;
