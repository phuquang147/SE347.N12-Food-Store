import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Not Found</title>
        <meta name="description" content="404 page of flone react minimalist eCommerce template." />
      </MetaTags>
      <div className="error-area pt-40 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="error">
                <h1>404</h1>
                <h2>OPPS! PAGE NOT FOUND</h2>
                <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                  Back to home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PageNotFound;
