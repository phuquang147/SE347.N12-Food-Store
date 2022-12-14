import Swiper from "react-id-swiper";
import sliderData from "~/data/hero-slider.json";
import HeroSliderSingle from "./HeroSliderSingle";

const HeroSlider = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return <HeroSliderSingle data={single} key={key} />;
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
