import { getIndividualCategories } from "~/helpers/product";
import ShopCategories from "./ShopCategories";
import ShopSearch from "./ShopSearch";

const ShopSidebar = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products);

  return (
    <div className="sidebar-style mr-30">
      <ShopSearch />

      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />
    </div>
  );
};

export default ShopSidebar;
