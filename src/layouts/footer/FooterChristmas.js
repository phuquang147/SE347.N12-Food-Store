import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const FooterTwo = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className="footer-area bg-gray"
      style={{
        backgroundImage: 'url("https://flone.jamstacktemplates.dev/assets/img/bg/footer-bg.jpg")',
        backgroundPosition: "center",
        color: "white !important",
      }}
    >
      <div className="footer-top text-center">
        <div className="container">
          <div className="footer-logo">
            <Link to="/">
              <img alt="" src="/assets/img/logo.png" />
            </Link>
          </div>
          <div className="footer-social">
            <p style={{ color: "white", padding: "0 50px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </p>
            <ul>
              <li>
                <a href="//www.facebook.com" style={{ color: "white" }}>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="//www.dribbble.com" style={{ color: "white" }}>
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="//www.pinterest.com" style={{ color: "white" }}>
                  <i className="fa fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="//www.twitter.com" style={{ color: "white" }}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="//www.linkedin.com" style={{ color: "white" }}>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div className="copyright">
            <p style={{ color: "white" }}>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
      <button className={`scroll-top ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()}>
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

export default FooterTwo;
