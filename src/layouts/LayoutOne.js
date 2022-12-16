import { Fragment } from "react";
import { Outlet } from "react-router";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";

const LayoutOne = () => {
  return (
    <Fragment>
      <HeaderOne />
      <Outlet />
      <FooterOne />
    </Fragment>
  );
};

export default LayoutOne;
