import React from "react";
import "./DescriptionsBox.css";

function DescriptionsBox() {
  return (
    <>
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Descriptions</div>
          <div className="descriptionbox-nav-box fadee">Reviwes (122)</div>
          {/* <div className="descriptionbox-nav-box fade">Reviewes</div> */}
        </div>
        <div className="descriptionbox-description">
          <p>
            E-commerce involves the electronic exchange of money for goods or
            services. Customers can make purchases through online platforms,
            using various payment methods such as credit/debit cards, digital
            wallets, or other online payment systems.E-commerce platforms
            provide detailed catalogs showcasing products or services. These
            catalogs typically include images, descriptions, prices, and
            customer reviews to assist buyers in making informed decisions.
          </p>
          <p>
            E-commerce involves the electronic exchange of money for goods or
            services. Customers can make purchases through online platforms,
            using various payment methods such as credit/debit cards, digital
            wallets, or other online payment systems.E-commerce platforms
            provide detailed catalogs showcasing products or services. These
            catalogs typically include images, descriptions, prices, and
            customer reviews to assist buyers in making informed decisions.
          </p>
        </div>
      </div>
    </>
  );
}
export default DescriptionsBox;
