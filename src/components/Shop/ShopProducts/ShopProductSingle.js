import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import numberWithCommas from "~/utils/number-with-commas";

const ShopProductSingle = ({ product, addToCart, addToWishlist, cartItem, wishlistItem, layout }) => {
  const { addToast } = useToasts();
  return (
    <div className={layout}>
      <div className="product-wrap mb-25">
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img className="default-img" src={process.env.PUBLIC_URL + product.image[0]} alt="" />
            {/* {product.image.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product.image[1]}
                alt=""
              />
            ) : (
              ""
            )} */}
          </Link>
          <div className="product-action">
            <div className="pro-same-action pro-cart">
              {product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  className={cartItem !== undefined && cartItem.quantity > 0 ? "active" : ""}
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={cartItem !== undefined ? "Đã thêm" : "Thêm vào giỏ"}
                >
                  <i className="pe-7s-cart"></i>{" "}
                  {cartItem !== undefined && cartItem.quantity > 0 ? "Đã thêm" : "Thêm vào giỏ"}
                </button>
              ) : (
                <button disabled className="active">
                  Hết hàng
                </button>
              )}
            </div>
            <div className="pro-same-action pro-wishlist">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={wishlistItem !== undefined ? "Đã thêm vào danh mục yêu thích" : "Thêm vào danh mục yêu thích"}
                onClick={() => addToWishlist(product, addToast)}
              >
                <i className="pe-7s-like" />
              </button>
            </div>
          </div>
        </div>

        <div className="product-content text-center">
          <h3>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>{product.name}</Link>
          </h3>

          <div className="product-price">
            <span>{`${numberWithCommas(product.price)} VNĐ`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductSingle;
