import { Navigate, useRoutes } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { Paths } from "./paths/path.routes";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={Paths.SEARCH} replace />,
    },
    ...AppRoutes,
    {
      path: "*",
      children: [
        {
          path: "*",
          element: <Navigate to={Paths.SEARCH} replace />,
        },
      ],
    },
  ]);
};
