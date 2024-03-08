import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className="Navbar ">
        <div className="navbar-logo">
          <img src={logo} alt="loading logo" />
          <p>SHOPPER</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Shop</Link>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/womens">Wommens</Link>
            </li>
            <li>
              {" "}
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <Link to="/login">
            <button type="button" class="btn btn-light">
              <span>Login</span>
            </button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="loading cart icon " />
            <div className="count">
              <span>{getTotalCartItems()}</span>
            </div>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Navbar;
