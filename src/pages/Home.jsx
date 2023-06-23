import Application from "../components/application/Application";
import Popular from "../components/popular/Popular";
import Brands from "../components/brands/Brands";
import Favorite from "../components/favorite/Favorite";
import Promo from "../components/promo/Promo";
import SignUp from "../components/signUp/SignUp";
import Sale from "../components/sale/Sale";

function Home() {
  return (
    <>
      <Promo />
      <Popular />
      <Brands />
      <Favorite />
      <Sale />
      <Application />
      <SignUp />
    </>
  );
}

export default Home;
