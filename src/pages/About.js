import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import "~/assets/scss/_about.scss";
import SectionTitleWithText from "~/components/section-title/SectionTitleWithText";
import TextGrid from "../wrappers/TextGrid";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Về chúng tôi</title>
      </MetaTags>

      <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

      <TextGrid spaceBottomClass="pb-70" />
    </Fragment>
  );
};

export default About;
