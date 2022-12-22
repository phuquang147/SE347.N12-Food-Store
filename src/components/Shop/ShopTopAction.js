import { setActiveLayout } from "../../helpers/product";

const ShopTopAction = ({
  layouts,
  setLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shopping-wrap">
        <div className="shop-select">
          <select
            onChange={(e) => getFilterSortParams("filterSort", e.target.value)}
          >
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
            setLayout(layouts.twoColumns);
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={(e) => {
            setLayout(layouts.threeColumns);
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
      </div>
    </div>
  );
};

export default ShopTopAction;
