import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionsBox from "../Components/DescriptionBox/DescriptionsBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
function Proudect() {
  const { all_products } = useContext(ShopContext);
  console.log(all_products);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <>
      <div className="product">
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionsBox />
        <RelatedProducts />
      </div>
    </>
  );
}
export default Proudect;
