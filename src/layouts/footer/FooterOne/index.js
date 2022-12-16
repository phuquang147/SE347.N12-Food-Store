import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "./FooterCopyright";
import FooterNewsletter from "./FooterNewsletter";

const FooterOne = () => {
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
    <footer className="footer-area bg-gray pt-100 pb-70">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-2 col-sm-4">
            <FooterCopyright />
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>VỀ CHÚNG TÔI</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to="/about">Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to="#/">Vị trí cửa hàng</Link>
                  </li>
                  <li>
                    <Link to="/contact">Liên hệ</Link>
                  </li>
                  <li>
                    <Link to="#/">Theo dõi đơn hàng</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3>LIÊN KẾT</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to="#/">Chính sách hoàn trả</Link>
                  </li>
                  <li>
                    <Link to="#/">Hỗ trợ</Link>
                  </li>
                  <li>
                    <Link to="#/">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <FooterNewsletter />
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

export default FooterOne;
