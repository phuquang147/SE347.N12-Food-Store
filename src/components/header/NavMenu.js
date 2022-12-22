import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="sidebar-menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/shop">Sản phẩm</Link>
          </li>
          {/* <li>
            <Link to="/">
              Các Trang
              <i className="fa fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/cart">Giỏ hàng</Link>
              </li>
              <li>
                <Link to="/checkout">Thanh toán</Link>
              </li>
              <li>
                <Link to="/wishlist">Yêu thích</Link>
              </li>

              <li>
                <Link to="/not-found">404</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
