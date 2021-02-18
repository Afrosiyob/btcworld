import { Button, Card, Col, Result, Row } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { getPlans } from "../../../store/plans/action";

function Plans() {
  let history = useHistory();

  const { plans, getLoading } = useSelector((state) => state.plansReducer);

  console.log("====================================");
  console.log(getLoading);
  console.log("====================================");
  console.log("====================================");
  console.log(plans);
  console.log("====================================");

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
            <Col sm={12} md={8} lg={6}>
              <Card
                className="shadow-sm text-center rounded"
                headStyle={{
                  backgroundColor: "#002140",
                  textTransform: "uppercase",
                  color: "white",
                }}
                title="Ta'rif 1"
                bordered={false}
              >
                <h2>
                  100000 <small>so'm</small>
                </h2>
                <p>~ birinchi ta'rif haqida</p>
                <button className="header-btn rounded-pill px-5">
                  Sotib olish
                </button>
              </Card>
            </Col>
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
