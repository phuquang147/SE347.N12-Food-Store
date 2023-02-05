import { Fragment } from "react";
import { useGoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import MetaTags from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { refreshToken } from "~/utils/refreshToken";

const clientId = "28621200637-b33nlbjs4h5rpl5fp3d8tkdc3utp87fe.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleLogin = () => {
    navigate("/");
  };

  const onSuccess = (res) => {
    refreshToken(res);

    const { name, imageUrl, email } = res.profileObj;

    // dispatch(authActions.login());

    localStorage.setItem("nameGg", name);
    localStorage.setItem("imageGg", imageUrl);
    localStorage.setItem("email", email);
    addToast("Đăng nhập thành công", { appearance: "success", autoDismiss: true, autoDismissTimeout: 3000 });
    navigate("/", { replace: true });
  };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  const responseFacebook = async (res) => {
    if (res.status === "unknown") {
      alert("Login failed");
      return;
    }

    localStorage.setItem("nameFb", res.name);
    localStorage.setItem("imageFb", res.picture.data.url);
    localStorage.setItem("email", res.email);

    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: res.email,
        type: "fb",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // dispatch(authActions.login());
    navigate("/", { replace: true });
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Đăng nhập | Organic Shop</title>
      </MetaTags>

      <div className="container pt-100 pb-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12 auth-form-container">
            <h4 className="auth-heading">Đăng Nhập</h4>
            <div className="auth-form">
              <form onSubmit={handleLogin}>
                <input type="text" placeholder="Tên đăng nhập" required />
                <input type="password" placeholder="Mật khẩu" required minLength={6} />

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
            <div className="methods-login">
              <p>hoặc</p>
              <div>
                <img src="/assets/img/login/google.svg" alt="Google" onClick={signIn} />

                <FacebookLogin
                  appId="418153143755336"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,email,user_friends"
                  callback={responseFacebook}
                  textButton=""
                  icon={<img src="/assets/img/login/facebook.svg" alt="Facebook" />}
                />
              </div>
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
