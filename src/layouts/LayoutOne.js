import { Fragment } from "react";
import { Outlet } from "react-router";
import HeroSlider from "~/components/Home/HeroSlider";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";

const LayoutOne = () => {
  return (
    <Fragment>
      <HeaderOne />
      <HeroSlider />
      <Outlet />
      <FooterOne />
    </Fragment>
  );
};

export default LayoutOne;
