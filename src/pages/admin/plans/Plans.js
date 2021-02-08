import React from "react";
import { useTranslation } from "react-i18next";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";

function Plans() {
  const { t } = useTranslation();
  return (
    <div>
      <HelmetTitle title={t(`Admin.Titul5`)} />
      this is plans
    </div>
  );
}

export default Plans;
