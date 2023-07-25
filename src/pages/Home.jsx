import Application from "../components/application/Application";
import Popular from "../components/popular/Popular";
import Brands from "../components/brands/Brands";
import Favorite from "../components/favorite/Favorite";
import Promo from "../components/promo/Promo";
import SignUp from "../components/signUp/SignUp";
import Sale from "../components/sale/Sale";

function Home({ onPlus, items, onFavorite, cartItems, isLoading }) {

  return (
    <>
      <Promo />
      <Popular onPlus={onPlus} items={items} onFavorite={onFavorite} cartItems={cartItems} isLoading={isLoading}/>
      {/* <Brands />
      <Favorite />
      <Sale />
      <Application /> */}
      <SignUp />
    </>
  );
}

export default Home;
