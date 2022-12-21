import { Fragment, useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";

const ProductImageGallery = ({ product }) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade",
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper overflow-hidden">
        <LightgalleryProvider>
          <Swiper {...gallerySwiperParams}>
            {product.image &&
              product.image.map((single, key) => {
                return (
                  <div key={key}>
                    <LightgalleryItem
                      group="any"
                      src={process.env.PUBLIC_URL + single}
                    >
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + single}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </LightgalleryItem>
                  </div>
                );
              })}
          </Swiper>
        </LightgalleryProvider>
      </div>
      <div className="product-small-image-wrapper mt-15 overflow-hidden">
        <Swiper {...thumbnailSwiperParams}>
          {product.image &&
            product.image.map((single, key) => {
              return (
                <div key={key}>
                  <div className="single-image">
                    <img
                      src={process.env.PUBLIC_URL + single}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default ProductImageGallery;
