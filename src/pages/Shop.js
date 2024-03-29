import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { getSortedProducts } from "../helpers/product";
import ShopProducts from "../components/Shop/ShopProducts/index";
import ShopSidebar from "../components/Shop/ShopSidebar/index";
import ShopTopbar from "../components/Shop/ShopTopbar/index";

const Shop = ({ products }) => {
  console.log("Shop accessed");
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;

  const getLayout = (layout) => {
    setLayout(layout);
  };

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
        <title>Shop</title>
      </MetaTags>

      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              {/* shop sidebar */}
              <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30" />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              {/* shop topbar default */}
              <ShopTopbar
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                productCount={products.length}
                sortedProductCount={currentData.length}
              />

              {/* shop page content default */}
              <ShopProducts layout={layout} products={currentData} />

              {/* shop product pagination */}
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
// export default Shop;
