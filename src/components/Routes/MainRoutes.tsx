import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../Home";

export const MainRoutes = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};
