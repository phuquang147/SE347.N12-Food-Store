import LayoutThree from "~/layouts/LayoutThree";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

const AuthenticationRoutes = {
  path: "/",
  element: <LayoutThree />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
};

export default AuthenticationRoutes;
