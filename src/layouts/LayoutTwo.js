import { Fragment } from "react";
import { Outlet } from "react-router";
import FooterTwo from "./footer/FooterChristmas";
import HeaderTwo from "./header/HeaderTwo";

const LayoutTwo = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <Outlet />
      <FooterTwo />
    </Fragment>
  );
};

export default LayoutTwo;
