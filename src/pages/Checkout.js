import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import numberWithCommas from "~/utils/number-with-commas";

const Checkout = ({ location, cartItems }) => {
  let cartTotalPrice = 0;

  return (
    <Fragment>
      <MetaTags>
        <title>Thanh toán</title>
      </MetaTags>

      <div className="checkout-area pt-95 pb-100">
        <div className="container">
          {cartItems && cartItems.length >= 1 ? (
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Thông tin thanh toán</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Họ và tên</label>
                        <input type="text" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Địa chỉ</label>
                        <input type="text" required />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Số điện thoại</label>
                        <input type="text" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Email</label>
                        <input type="email" required />
                      </div>
                    </div>
                  </div>

                  <div className="additional-info-wrap">
                    <h4>Thông tin thêm</h4>
                    <div className="additional-info">
                      <label>Ghi chú</label>
                      <textarea placeholder="Ghi chú" name="message" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>Đơn hàng của bạn</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Sản phẩm</li>
                          <li>Tổng</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          {cartItems.map((cartItem, key) => {
                            cartTotalPrice += cartItem.price * cartItem.quantity;

                            return (
                              <li key={key}>
                                <span className="order-middle-left">
                                  {cartItem.name} X {cartItem.quantity}
                                </span>{" "}
                                <span className="order-price">
                                  {numberWithCommas(cartItem.price * cartItem.quantity)} VNĐ
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Tổng tiền</li>
                          <li>{numberWithCommas(cartTotalPrice)} VNĐ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover">Đặt hàng</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-cash"></i>
                  </div>
                  <div className="item-empty-area__text">
                    Không có sản phẩm nào trong giỏ hàng <br />{" "}
                    <Link to={process.env.PUBLIC_URL + "/shop"}>Mua ngay</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

export default connect(mapStateToProps)(Checkout);
// export default Checkout;
