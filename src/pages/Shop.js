import { Fragment, useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import ShopProducts from "~/components/Shop/ShopProducts/index";
import ShopSidebar from "~/components/Shop/ShopSidebar/index";
import ShopTopAction from "~/components/Shop/ShopTopAction";
import { getSortedProducts } from "~/helpers/product";

const layouts = {
  twoColumns: "col-xl-6 col-sm-6",
  threeColumns: "col-xl-4 col-sm-6",
  fourColumns: "col-xl-3 col-sm-6",
};

const Shop = ({ products }) => {
  const [layout, setLayout] = useState(layouts.threeColumns);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <MetaTags>
        <title>Shop | Organic Shop</title>
      </MetaTags>

      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <ShopSidebar products={products} getSortParams={getSortParams} />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <ShopTopAction
                layouts={layouts}
                setLayout={setLayout}
                getFilterSortParams={getFilterSortParams}
                productCount={products.length}
                sortedProductCount={currentData.length}
              />

              <ShopProducts layout={layout} products={currentData} />

              <div className="pro-pagination-style text-center mt-30">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
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
  };
};

export default connect(mapStateToProps)(Shop);
