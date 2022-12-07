import LayoutOne from "~/layouts/LayoutOne";
import Home from "~/pages/Home";

const MainRoutes = {
  path: "/",
  element: <LayoutOne />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
