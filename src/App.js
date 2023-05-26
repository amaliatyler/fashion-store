import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Sale from "./components/sale/Sale";
import Favorite from "./components/favorite/Favorite";
import Application from "./components/application/Application";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signUp/SignUp";
// import addShineClass from './utils/addShineClass';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Promo /> */}
      <Brands />
      <Arrivals />
      {/* <Sale /> */}
      <Favorite />
      <Application />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
