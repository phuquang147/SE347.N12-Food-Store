import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/product";

const ShopTopAction = ({ getLayout, getFilterSortParams, productCount, sortedProductCount }) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select onChange={(e) => getFilterSortParams("filterSort", e.target.value)}>
            <option value="default">Mặc định</option>
            <option value="priceHighToLow">Giá - Cao xuống thấp</option>
            <option value="priceLowToHigh">Giá - Thấp lên cao</option>
          </select>
        </div>
        <p>
          Hiển thị {sortedProductCount} trên {productCount} kết quả
        </p>
      </div>

      <div className="shop-tab">
        <button
          onClick={(e) => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={(e) => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
      </div>
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default ShopTopAction;
