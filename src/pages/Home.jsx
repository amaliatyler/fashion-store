import Application from "../components/application/Application";
import Arrivals from "../components/arrivals/Arrivals";
import Brands from "../components/brands/Brands";
import Favorite from "../components/favorite/Favorite";
import Promo from "../components/promo/Promo";
import SignUp from "../components/signUp/SignUp";
import Sale from "../components/sale/Sale";

function Home() {
  return (
    <>
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favorite />
      <Application />
      <SignUp />
    </>
  );
}

export default Home;
