import { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import FooterChristmas from "./footer/FooterChristmas";
import Snowfall from "react-snowfall";
import "./LayoutChristmas.scss";
import { Link } from "react-router-dom";
import HeaderChristmas from "./header/HeaderChristmas";

const LayoutChristmas = () => {
  const location = useLocation();

  return (
    <Fragment>
      <HeaderChristmas />
      {location.pathname === "/" && (
        <div className="slider-area" style={{ position: "relative" }}>
          <span className="body-effect effect-snow"></span>
          <div
            className="single-slider slider-height"
            style={{
              backgroundImage: "url('/assets/img/slider/christmas2.png')",
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 align-self-center">
                  <div className="slider-content" style={{ marginTop: "120px" }}>
                    <h3>Christmas Sale</h3>
                    <h1>
                      New Year Offer <br />
                      Collection
                    </h1>
                    <div class="slider-btn btn-hover">
                      <Link to={"/shop"}>MUA NGAY</Link>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                  <div className="slider-single-img">
                    <img src="/assets/img/slider/christmas1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
      <FooterChristmas />
      <Snowfall
        color="red"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 10000,
        }}
        snowflakeCount={30}
      />
    </Fragment>
  );
};

export default LayoutChristmas;