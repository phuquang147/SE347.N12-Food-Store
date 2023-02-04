import LayoutOne from "~/layouts/LayoutOne";
import About from "~/pages/About";
import Home from "~/pages/Home";
import MyAccount from "~/pages/MyAccount";
import Wishlist from "~/pages/Wishlist";
import Cart from "~/pages/Cart";
import PageNotFound from "~/pages/PageNotFound";
import Contact from "~/pages/Contact";
import Checkout from "~/pages/Checkout";
import Shop from "~/pages/Shop";
import Product from "~/pages/Product";
import LayoutChristmas from "~/layouts/LayoutChristmas";

const MainRoutes = {
  path: "/",
  element: <LayoutChristmas />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/not-found",
      element: <PageNotFound />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
  ],
};

export default MainRoutes;
