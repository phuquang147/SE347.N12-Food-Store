import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import Logo from "~/components/header/Logo";

const FooterNewYear = () => {
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
    <footer className="footer-area footer-new-year">
      <div className="footer-top text-center">
        <div className="container">
          <div className="footer-logo">
            <Logo type="vertical" />
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="//www.facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="//www.dribbble.com">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="//www.pinterest.com">
                  <i className="fa fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="//www.twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="//www.linkedin.com">
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
            <p>© 2020</p>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

export default FooterNewYear;
