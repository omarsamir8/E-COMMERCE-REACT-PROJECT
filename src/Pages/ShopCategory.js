import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropDown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img className="category-banner" src={props.banner} alt="loading" />
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> Out of 36 Products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropDown} alt="loading" />
          </div>
        </div>
        <div className="shopCategory-Products">
          {all_products.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="loadmore">Explore More</div>
      </div>
    </>
  );
}
export default ShopCategory;
