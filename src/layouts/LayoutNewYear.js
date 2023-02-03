import { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import HeroSliderNewYear from "~/components/Home/HeroSliderNewYear";
import FooterNewYear from "./footer/FooterNewYear";
import HeaderNewYear from "./header/HeaderNewYear";

const LayoutNewYear = () => {
  const location = useLocation();

  return (
    <Fragment>
      <HeaderNewYear />
      {location.pathname === "/" && <HeroSliderNewYear />}
      <Outlet />
      <FooterNewYear />
    </Fragment>
  );
};

export default LayoutNewYear;
