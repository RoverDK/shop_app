import { Route, Routes } from "react-router-dom";

import { SignUpContainer } from "../pages/SignUp/containers/SignUpContainer";

import { ROUTE_NAMES } from "./routeNames";
export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>HOME PAGE</h1>} />
      <Route path={ROUTE_NAMES.SIGNUP} element={<SignUpContainer />} />
    </Routes>
  );
};
