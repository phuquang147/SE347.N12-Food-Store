import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { useToasts } from "react-toast-notifications";
import ProductDescriptionInfo from "~/components/product/ProductDescriptionInfo";
import ProductImageGallery from "~/components/product/ProductImageGallery";

const Product = ({ products, cartItems, wishlistItems }) => {
  const { id } = useParams();
  const currentProduct = products.filter((single) => single.id === id)[0];
  const { addToast } = useToasts();

  const wishlistItem = wishlistItems.filter((wishlistItem) => wishlistItem.id === id)[0];

  return (
    <Fragment>
      <MetaTags>
        <title>{currentProduct.name}</title>
      </MetaTags>

      <div className="pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <ProductImageGallery product={currentProduct} />
            </div>
            <div className="col-lg-6 col-md-6">
              <ProductDescriptionInfo
                product={currentProduct}
                cartItems={cartItems}
                wishlistItem={wishlistItem}
                addToast={addToast}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
  };
};

export default connect(mapStateToProps)(Product);
