import LayoutOne from "~/layouts/LayoutOne";
import Home from "~/pages/Home";
import PageNotFound from "~/pages/PageNotFound";

const MainRoutes = {
  path: "/",
  element: <LayoutOne />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/not-found",
      element: <PageNotFound />,
    },
  ],
};

export default MainRoutes;
