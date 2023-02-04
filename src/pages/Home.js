import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Banner from "~/components/Home/Banner";
import FeatureIcon from "~/components/Home/FeatureIcon";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Trang chủ</title>
      </MetaTags>
      <FeatureIcon />
      <Banner />
    </Fragment>
  );
};

export default Home;
