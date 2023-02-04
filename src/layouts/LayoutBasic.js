import { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import HeroSlider from "~/components/Home/HeroSlider";
import FooterBasic from "./footer/FooterBasic";
import HeaderBasic from "./header/HeaderBasic";

const LayoutBasic = () => {
  const location = useLocation();

  return (
    <Fragment>
      <HeaderBasic />
      {location.pathname === "/" && <HeroSlider />}
      <Outlet />
      <FooterBasic />
    </Fragment>
  );
};

export default LayoutBasic;
