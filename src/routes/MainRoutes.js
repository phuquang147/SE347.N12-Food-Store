import LayoutOne from "~/layouts/LayoutOne";
import Home from "~/pages/Home";
import PageNotFound from "~/pages/PageNotFound";
import Contact from "~/pages/Contact";

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
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
};

export default MainRoutes;
