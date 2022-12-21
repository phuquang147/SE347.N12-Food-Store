import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderSingle from "./HeroSliderSingle";
import sliderData from "~/data/hero-slider";

const HeroSlider = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
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
