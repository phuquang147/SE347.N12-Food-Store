import LayoutAuthentication from "~/layouts/LayoutAuthentication";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

const AuthenticationRoutes = {
  path: "/",
  element: <LayoutAuthentication />,
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
