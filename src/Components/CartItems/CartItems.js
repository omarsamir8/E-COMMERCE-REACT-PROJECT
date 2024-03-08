import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, all_products, cartItem, removeFromCart } =
    useContext(ShopContext);

  return (
    <>
      <div className="cartitem">
        <div className="cartitems-formate-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div>
                <div className="cartitem-formate cartitems-formate-main ">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitem-quantity">
                    {cartItem[e.id]}
                  </button>
                  <p>${e.new_price * cartItem[e.id]}</p>
                  <img
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
        <hr />
        <div className="cartitem-down">
          <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div className="cartitem-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p> Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cartitem-promocode">
            <p>If you have promo code,enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
