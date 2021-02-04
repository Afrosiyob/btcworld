import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRouteAdmin } from "./ProtectedRoute";

const AdminLazy = lazy(() => import("../pages/admin/Admin"));
const MainLazy = lazy(() => import("../pages/main/Main"));

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainLazy} />
      <ProtectedRouteAdmin path="/admin" component={AdminLazy} />
    </Switch>
  );
}

export default Routes;
