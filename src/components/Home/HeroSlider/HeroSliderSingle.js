import { Link } from "react-router-dom";

const HeroSliderSingle = ({ data }) => {
  return (
    <div className="single-slider slider-height slider-height-res d-flex align-items-center bg-img swiper-slide">
      <img src={data.image} alt="" />
      <div className="container slider-content-wrapper">
        <div className="row d-flex justify-content-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="slider-content slider-content-fruits slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link className="animated" to={data.url}>
                  MUA NGAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderSingle;
