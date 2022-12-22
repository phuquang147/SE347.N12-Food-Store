import { connect } from "react-redux";
import { addToCart } from "~/redux/actions/cartActions";
import { addToWishlist } from "~/redux/actions/wishlistActions";
import ShopProductSingle from "./ShopProductSingle";

const ShopProducts = ({
  products,
  layout,
  addToCart,
  addToWishlist,
  cartItems,
  wishlistItems,
}) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className="row">
        {products.map((product) => {
          return (
            <ShopProductSingle
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              cartItem={
                cartItems.filter((cartItem) => cartItem.id === product.id)[0]
              }
              wishlistItem={
                wishlistItems.filter(
                  (wishlistItem) => wishlistItem.id === product.id
                )[0]
              }
              key={product.id}
              layout={layout}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
