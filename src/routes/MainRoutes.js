import LayoutOne from "~/layouts/LayoutOne";
import About from "~/pages/About";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import MyAccount from "~/pages/MyAccount";
import Register from "~/pages/Register";
import Wishlist from "~/pages/Wishlist";
import Cart from "~/pages/Cart";
import PageNotFound from "~/pages/PageNotFound";
import Contact from "~/pages/Contact";
import Checkout from "~/pages/Checkout";
import Product from "~/pages/Product";

const MainRoutes = {
  path: "/",
  element: <LayoutOne />,
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
      path: "/product/:id",
      element: <Product />,
    },
  ],
};

export default MainRoutes;
