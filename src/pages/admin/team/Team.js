import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HelmetTitle from "../../../components/Halmet/HelmetTitle";
import { getTree } from "../../../store/tree/action";
import { TeamTable } from "./TeamTable/TeamTable";
import { useTranslation } from "react-i18next";

function Team() {
  const { t }= useTranslation();
  const dispatch = useDispatch();
  const { treeData, getLoading } = useSelector((state) => state.treeReducer);
  const { userData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getTree(userData.user.id));
  }, [dispatch, userData]);

  return (
    <div>
    <HelmetTitle title={t(`Admin.Titul3`)} />
      {/* treeData={} */}
      <h2 className="w-100 text-muted mb-3">{t(`team.Titul`)}</h2>
      <TeamTable treeData={treeData} getLoading={getLoading} />
    </div>
  );
}

export default Team;
