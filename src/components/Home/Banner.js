import { Link } from "react-router-dom";
import banner1 from "~/assets/images/banner/banner1.png";
import banner2 from "~/assets/images/banner/banner2.png";
import banner3 from "~/assets/images/banner/banner3.png";
import banner4 from "~/assets/images/banner/banner4.png";
import banner5 from "~/assets/images/banner/banner5.png";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-banner mb-20">
                <Link to="/shop">
                  <img src={banner1} alt="" />
                </Link>
                <div className="banner-content banner-position-1">
                  <h3>Táo Xanh</h3>
                  <p>
                    Giá từ <span>100,000 VNĐ</span>
                  </p>
                  <Link to="/shop">
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-banner mb-20">
                <Link to="/shop">
                  <img src={banner2} alt="" />
                </Link>
                <div className="banner-content banner-position-1">
                  <h3>Cam Chín</h3>
                  <p>
                    Giá từ <span>50,000 VNĐ</span>
                  </p>
                  <Link to="/shop">
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-banner mb-20">
            <Link to="/shop">
              <img src={banner3} alt="" />
            </Link>
            <div className="banner-content-2 banner-position-2">
              <h2>Trái cây </h2>
              <h5>Tốt cho sức khỏe</h5>
              <Link to="/shop">Mua ngay</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="single-banner mb-20">
                <Link to="/shop">
                  <img src={banner4} alt="" />
                </Link>
                <div className="banner-content banner-position-2">
                  <h3>Bắp Chín</h3>
                  <p>
                    Giá từ <span>60,000 VNĐ</span>
                  </p>
                  <Link to="/shop">
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="single-banner mb-20">
                <Link to="/shop">
                  <img src={banner5} alt="" />
                </Link>
                <div className="banner-content banner-position-2">
                  <h3>Ổi xanh</h3>
                  <p>
                    Giá từ <span>30,000 VNĐ</span>
                  </p>
                  <Link to="/shop">
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
