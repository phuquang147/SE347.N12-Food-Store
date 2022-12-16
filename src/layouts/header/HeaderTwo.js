import { useEffect, useState } from "react";
import IconGroup from "~/components/header/IconGroup";
import Logo from "~/components/header/Logo";
import MobileMenu from "~/components/header/MobileMenu";
import NavMenu from "~/components/header/NavMenu";

const HeaderTwo = () => {
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
    <header className="header-area clearfix header">
      <div className="header-top-area header-padding-2 d-lg-block d-none">
        <div className="container-fluid">
          <div className="header-top-wrap">
            <div>
              <p>Số điện thoại: 0923 123 123</p>
            </div>
            <IconGroup />
          </div>
        </div>
      </div>
      <div
        className={`header-bottom sticky-bar header-padding-2 ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-6">
              <div className="center-menu-logo text-left text-lg-center">
                <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
              </div>
            </div>
            <div className="col-6 d-block d-lg-none">
              <IconGroup />
            </div>
            <div className="col-xl-12 col-lg-12 d-none d-lg-block">
              <NavMenu />
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
