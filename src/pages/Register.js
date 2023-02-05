import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Đăng ký | Organic Shop</title>
      </MetaTags>

      <div className="container pt-100 pb-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12 auth-form-container">
            <h4 className="auth-heading">Đăng Ký</h4>
            <div className="auth-form">
              <form onSubmit={handleRegister}>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="password" placeholder="Mật khẩu" />
                <input placeholder="Email" type="email" />
                <div className="button-box">
                  <button type="submit">
                    <span>Đăng ký</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="auth-nav">
              <span>Đã có tài khoản?</span>
              <Link to="/login">Đăng nhập ngay!</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
