import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="loading" />
          <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-media">
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="loading" />
          </div>
          <div className="footer-icon-container">
            <img src={pintester_icon} alt="loading" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="loading" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>CopyRight @2024 By Omar Samir Ibrahim (8)</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
