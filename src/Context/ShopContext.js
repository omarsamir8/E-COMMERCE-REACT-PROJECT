import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";
import Swal from "sweetalert2";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    Swal.fire({
      title: "Done!",
      text: "Product Added Successfully!",
      icon: "success",
      confirmButtonText: "Ok!",
    });
  };

  const removeFromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    Swal.fire({
      title: "Done!",
      text: "Product Removed Successfully!",
      icon: "success",
      confirmButtonText: "Ok!",
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };
  const contextvalue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
  };
  console.log(cartItem);
  return (
    <ShopContext.Provider value={contextvalue}>
      {[props.children]}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
