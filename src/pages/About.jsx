import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import TextGrid from "../wrappers/TextGrid";
import "../assets/scss/_about.scss";

const About = ({ location }) => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | About Us</title>
        <meta name="description" content="About page of flone react minimalist eCommerce template." />
      </MetaTags>

      <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

      {/* text grid */}
      <TextGrid spaceBottomClass="pb-70" />
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
