import LayoutOne from "~/layouts/LayoutOne";
import Home from "~/pages/Home";
import Wishlist from "~/pages/Wishlist";
import Cart from "~/pages/Cart";

const MainRoutes = {
  path: "/",
  element: <LayoutOne />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ],
};

export default MainRoutes;
