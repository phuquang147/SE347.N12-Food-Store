import { Link } from "react-router-dom";

const HeroSliderSingleNewYear = ({ data }) => {
  return (
    <div className="single-slider slider-height slider-height-res d-flex align-items-center bg-img swiper-slide">
      <img src={data.image} alt="" />
      <div className="container slider-content-wrapper">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="slider-content slider-content-fruits slider-animated-1 new-year">
              <h3 className="animated new-year">{data.title}</h3>
              <h1 className="animated new-year">{data.subtitle}</h1>
              <div className="slider-btn btn-hover new-year">
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

export default HeroSliderSingleNewYear;
