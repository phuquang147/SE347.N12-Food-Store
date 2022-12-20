import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Banner from "~/components/Home/Banner";
import FeatureIcon from "~/components/Home/FeatureIcon";
import HeroSlider from "~/components/Home/HeroSlider";

// import "swiper/css/swiper.css";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Trang Chủ</title>
      </MetaTags>
      <HeroSlider />
      <FeatureIcon />
      <Banner />
    </Fragment>
  );
};

export default Home;
