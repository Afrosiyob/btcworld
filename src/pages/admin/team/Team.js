import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTree } from "../../../store/tree/action";
import { TeamTable } from "./TeamTable/TeamTable";

function Team() {
  const dispatch = useDispatch();
  const { treeData, getLoading } = useSelector((state) => state.treeReducer);
  const { userData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (userData.user.id) {
      dispatch(getTree(userData.user.id));
    }
  }, [dispatch, userData]);

  return (
    <div>
      {/* treeData={} */}
      <h2 className="w-100 text-muted mb-3">All team members</h2>
      <TeamTable treeData={treeData} getLoading={getLoading} />
    </div>
  );
}

export default Team;
