import { setActiveSort } from "~/helpers/product";

const ShopCategories = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Danh mục</h4>
      <div className="sidebar-widget-tag mt-25">
        {categories ? (
          <ul>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e) => {
                      setActiveSort(e);
                      getSortParams("category", category);
                    }}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "Không có danh mục"
        )}
      </div>
    </div>
  );
};

export default ShopCategories;
