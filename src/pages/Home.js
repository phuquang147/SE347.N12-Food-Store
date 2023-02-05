import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Banner from "~/components/Home/Banner";
import FeatureIcon from "~/components/Home/FeatureIcon";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Trang chủ | Organic Shop</title>
      </MetaTags>
      <FeatureIcon />
      <Banner />
      {/* <div style={{ margin: "100px 0" }}></div> */}
    </Fragment>
  );
};

export default Home;
