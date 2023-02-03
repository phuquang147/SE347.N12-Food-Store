import { useEffect, useState } from "react";
import HeaderTop from "~/components/header/HeaderTop";
import IconGroup from "~/components/header/IconGroup";
import Logo from "~/components/header/Logo";
import MobileMenu from "~/components/header/MobileMenu";
import NavMenu from "~/components/header/NavMenu";

const HeaderNewYear = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className="header-area clearfix ">
      <div className="visible header-padding-2 fluid-border header-top-area">
        <div className="container-fluid">
          <HeaderTop />
        </div>
      </div>

      <div
        className={`header-padding-2 sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              <Logo type="tet" />
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <NavMenu />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              <IconGroup />
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderNewYear;
