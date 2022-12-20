import { Link } from "react-router-dom";
import MenuCart from "./sub-components/MenuCart";
// import { deleteFromCart } from "../../redux/actions/cartActions";

const IconGroup = ({ cartData, wishlistData, deleteFromCart }) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <div className="header-right-wrap">
      <div className="same-style account-setting d-none d-lg-block">
        <button onClick={(e) => handleClick(e)}>
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
            <li>
              <Link to="/my-account">Tài khoản</Link>
            </li>
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

// const mapStateToProps = (state) => {
//   return {
//     cartData: state.cartData,
//     wishlistData: state.wishlistData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     },
//   };
// };

export default IconGroup;
