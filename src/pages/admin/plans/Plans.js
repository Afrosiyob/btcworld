import { Button, Result } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";

function Plans() {
  

let history = useHistory()



  const { t } = useTranslation();
  return (
    <div>
      <HelmetTitle title={t(`Admin.Titul5`)} />
      <Result
    status="404"
    // title="404"
    subTitle={t(`plans.Titul`)}
    extra={<Button onClick={()=>history.goBack()} type="primary">{t(`plans.Titul2`)}</Button>}
  />
    </div>
  );
}

export default Plans;
