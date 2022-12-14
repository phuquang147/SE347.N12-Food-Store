import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Liên hệ</title>
      </MetaTags>

      <div className="contact-area pt-100 pb-100">
        <div className="container">
          <div className="contact-map mb-10">
            <iframe
              title="map"
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57643.73514508581!2d51.4524426!3d25.4471736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45e79240aff901%3A0x78b22e86c6d52895!2sLusail%20Stadium!5e0!3m2!1sen!2s!4v1671339648379!5m2!1sen!2s"
              style={{ border: "10" }}
              allowFullScreen=""
              loading="lazy"
              referrerolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="custom-row-2">
            <div className="col-lg-4 col-md-5">
              <div className="contact-info-wrap">
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-info-dec">
                    <p>+012 345 678 102</p>
                    <p>+012 345 678 102</p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="contact-info-dec">
                    <p>
                      <a href="mailto:yourname@email.com">yourname@email.com</a>
                    </p>
                    <p>
                      <a href="http://localhost:3000/">yourwebsitename.com</a>
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="contact-info-dec">
                    <p>Thu Duc City, Viet Nam</p>
                  </div>
                </div>
                <div className="contact-social text-center">
                  <h3>Theo dõi chúng tôi</h3>
                  <ul>
                    <li>
                      <a href="//facebook.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="//pinterest.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="//thumblr.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-tumblr" />
                      </a>
                    </li>
                    <li>
                      <a href="//vimeo.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="//twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="contact-form">
                <div className="contact-title mb-30">
                  <h2>Thông tin liên lạc</h2>
                </div>
                <form className="contact-form-style">
                  <div className="row">
                    <div className="col-lg-6">
                      <input name="name" placeholder="Họ và tên*" type="text" />
                    </div>
                    <div className="col-lg-6">
                      <input name="email" placeholder="Email*" type="email" />
                    </div>
                    <div className="col-lg-12">
                      <input name="subject" placeholder="Tiêu đề*" type="text" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Lời nhắn của bạn*" defaultValue={""} />
                      <button className="submit" type="submit">
                        Gửi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
