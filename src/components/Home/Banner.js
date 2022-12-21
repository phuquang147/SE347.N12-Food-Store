import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-banner mb-20">
                <Link to="/shop">
                  <img src="/assets/img/banner/banner1.png" alt="" />
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
                  <img src="/assets/img/banner/banner2.png" alt="" />
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
              <img src="/assets/img/banner/banner3.png" alt="" />
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
                  <img src="/assets/img/banner/banner4.png" alt="" />
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
                  <img src="/assets/img/banner/banner5.png" alt="" />
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
