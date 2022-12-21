import { useEffect, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { deleteFromCart } from "~/redux/actions/cartActions";
import MenuCart from "./sub-components/MenuCart";

const clientId = "28621200637-b33nlbjs4h5rpl5fp3d8tkdc3utp87fe.apps.googleusercontent.com";

const IconGroup = ({ cartData, wishlistData, deleteFromCart }) => {
  const avatarGg = localStorage.getItem("imageGg");
  const avatarFb = localStorage.getItem("imageFb");

  useEffect(() => {
    if (avatarFb || avatarGg) {
      setIsLogin(true);
    }
  }, [avatarGg, avatarFb]);

  const [isLogin, setIsLogin] = useState(avatarGg || avatarFb);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.add("active");
  };

  const onLogoutSuccess = () => {
    localStorage.removeItem("nameGg");
    localStorage.removeItem("imageGg");
    localStorage.removeItem("email");

    // dispatch(authActions.logout());
    // dispatch(cartActions.clearCart());
    addToast("Đăng xuất thành công", { appearance: "success", autoDismiss: true, autoDismissTimeout: 3000 });
    navigate("/", { replace: true });
  };

  const onFailure = () => {
    if (typeof window === "undefined") {
      return;
    }

    console.log("failed");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  const facebookLogout = () => {
    localStorage.removeItem("imageFb");
    localStorage.removeItem("nameFb");
    localStorage.removeItem("email");
    setIsLogin(false);

    // dispatch(authActions.logout());
    // dispatch(cartActions.clearCart());
  };

  return (
    <div className="header-right-wrap">
      <div className="same-style account-setting d-lg-block">
        <button onClick={(e) => handleClick(e)}>
          {avatarGg || avatarFb ? (
            <img className="user-avatar" src={avatarGg || avatarFb} alt="Avatar User" referrerPolicy="no-referrer" />
          ) : (
            <i className="pe-7s-user-female" />
          )}
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
            {isLogin && <li onClick={avatarGg ? signOut : facebookLogout}>Đăng xuất</li>}
            {isLogin && (
              <li>
                <Link to="/my-account">Tài khoản</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">{wishlistData && wishlistData.length ? wishlistData.length : 0}</span>
        </Link>
      </div>

      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{cartData && cartData.length ? cartData.length : 0}</span>
        </button>
        <MenuCart cartData={cartData} deleteFromCart={deleteFromCart} />
      </div>

      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{cartData && cartData.length ? cartData.length : 0}</span>
        </Link>
      </div>

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
    wishlistData: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
