import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Đăng nhập</title>
      </MetaTags>

      <div className="container pt-100 pb-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12 auth-form-container">
            <h4 className="auth-heading">Đăng Nhập</h4>
            <div className="auth-form">
              <form onSubmit={handleLogin}>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="password" placeholder="Mật khẩu" />

                <div className="button-box">
                  <div className="login-toggle-btn">
                    <div>
                      <input type="checkbox" />
                      <label className="ml-10">Nhớ mật khẩu</label>
                    </div>
                    <Link to="/">Quên mật khẩu?</Link>
                  </div>
                  <button type="submit">
                    <span>Đăng nhập</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="auth-nav">
              <span>Chưa có tài khoản?</span>
              <Link to="/register">Đăng ký ngay!</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
