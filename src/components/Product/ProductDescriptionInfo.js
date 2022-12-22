import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCartQuantity } from "~/helpers/product";
import { addToCart } from "~/redux/actions/cartActions";
import { addToWishlist } from "~/redux/actions/wishlistActions";
import numberWithCommas from "~/utils/number-with-commas";

const ProductDescriptionInfo = ({
  product,
  cartItems,
  wishlistItem,
  addToast,
  addToCart,
  addToWishlist,
}) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(cartItems, product);

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        <span>{`${numberWithCommas(product.price)} VNĐ`}</span>
      </div>
      <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>
      <div className="pro-details-quality">
        <div className="cart-plus-minus">
          <button
            onClick={() =>
              setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
            }
            className="dec qtybutton"
          >
            -
          </button>
          <input
            className="cart-plus-minus-box"
            type="text"
            value={quantityCount}
            readOnly
          />
          <button
            onClick={() =>
              setQuantityCount(
                quantityCount < product.stock - productCartQty
                  ? quantityCount + 1
                  : quantityCount
              )
            }
            className="inc qtybutton"
            disabled={product.stock <= 0}
          >
            +
          </button>
        </div>
        <div className="pro-details-cart btn-hover">
          {product.stock && product.stock > 0 ? (
            <button
              onClick={() => addToCart(product, addToast, quantityCount)}
              disabled={productCartQty >= product.stock}
            >
              Thêm vào giỏ
            </button>
          ) : (
            <button disabled>Hết hàng</button>
          )}
        </div>
        <div className="pro-details-wishlist">
          <button
            className={wishlistItem !== undefined ? "active" : ""}
            disabled={wishlistItem !== undefined ? true : false}
            title={
              wishlistItem !== undefined
                ? "Đã thêm vào yêu thích"
                : "Thêm vào yêu thích"
            }
            onClick={() => addToWishlist(product, addToast)}
          >
            {wishlistItem !== undefined ? (
              <box-icon type="solid" name="heart"></box-icon>
            ) : (
              <box-icon name="heart"></box-icon>
            )}
          </button>
        </div>
      </div>

      {product.category && (
        <div className="pro-details-meta">
          <span>Danh mục :</span>
          <ul>
            {product.category.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/shop"}>{single}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);
