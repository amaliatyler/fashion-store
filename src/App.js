import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";
import CartPage from "./pages/cartPage/CartPage";
import Drawer from "./components/drawer/Drawer";

function App() {

  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  return(
    <div className="App">
      <div className="wrapper">
       {isDrawerOpened && <Drawer items={cartItems} onClose={() => setIsDrawerOpened(false)}/>}
        <Header handleCartClick={()=> {setIsDrawerOpened(true)}}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
