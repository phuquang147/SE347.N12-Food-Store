import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const MenuCart = ({ cartData, deleteFromCart }) => {
  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <div className="shopping-cart-content">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {
              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link to={"/product/" + single.id}>
                      <img alt="" src={single.image[0]} className="img-fluid" />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link to={"/product/" + single.id}>{single.name}</Link>
                    </h4>
                    <h6>Số lượng: {single.quantity}</h6>
                    <span>{`${single.price} VNĐ`}</span>
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Tổng : <span className="shop-total">{cartTotalPrice} VNĐ</span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={"/cart"}>
              Xem giỏ hàng
            </Link>
            <Link className="default-btn" to={"/checkout"}>
              Thanh toán
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">Không có sản phẩm nào trong giỏ</p>
      )}
    </div>
  );
};

export default MenuCart;
