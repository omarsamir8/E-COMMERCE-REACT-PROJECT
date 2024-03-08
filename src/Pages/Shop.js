import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/New Collections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
function Shop() {
  return (
    <>
      <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </div>
    </>
  );
}
export default Shop;
