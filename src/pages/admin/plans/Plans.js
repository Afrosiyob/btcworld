import { Button, Result } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { getPlans } from "../../../store/plans/action";

function Plans() {
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <div>
      <HelmetTitle title={t(`Admin.Titul5`)} />
      <Result
        status="404"
        // title="404"
        subTitle={t(`plans.Titul`)}
        extra={
          <Button onClick={() => history.goBack()} type="primary">
            {t(`plans.Titul2`)}
          </Button>
        }
      />
    </div>
  );
}

export default Plans;
