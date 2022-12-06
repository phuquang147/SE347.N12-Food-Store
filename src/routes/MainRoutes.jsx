import Layout1 from "~/layouts/layout1";
import Home from "~/pages/Home";

const MainRoutes = {
  path: "/",
  element: <Layout1 />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
