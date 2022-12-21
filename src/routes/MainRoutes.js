import LayoutOne from "~/layouts/LayoutOne";
import About from "~/pages/About";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import MyAccount from "~/pages/MyAccount";
import Register from "~/pages/Register";
import Shop from "~/pages/Shop";

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
      path: "/shop",
      element: <Shop />,
    }
  ],
};

export default MainRoutes;
