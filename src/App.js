import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";
import CartPage from "./pages/cartPage/CartPage";
import Drawer from "./components/drawer/Drawer";

function App() {

  const [items, setItems] = React.useState([]);
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  /* отправляем запрос на бэкенд только при первом рендере */
  React.useEffect(() => {
    axios.get('https://64a582c300c3559aa9bfd40f.mockapi.io/items').then((res) => {
      setItems(res.data)
    });

    axios.get('https://64a582c300c3559aa9bfd40f.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });

}, []);

  const onAddToCart = (obj) => {
    axios.post('https://64a582c300c3559aa9bfd40f.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://64a582c300c3559aa9bfd40f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  /* обработка поля поиска */
  const [searchValue, setSearchValue] = React.useState('');

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  }

  return(
    <div className="App">
      <div className="wrapper">
       {isDrawerOpened && <Drawer onClose={() => setIsDrawerOpened(false)} items={cartItems} setCartItems={setCartItems} onRemoveFromCart={onRemoveFromCart}/>}
        <Header handleCartClick={()=> {setIsDrawerOpened(true)}}/>
          <Routes>
            <Route path="/" element={<Home onPlus={(obj) => onAddToCart(obj)} items={items} />} />
            <Route path="/sales" element={<SalesPage searchValue={searchValue} setSearchValue={setSearchValue} handleInput={handleInput} />} />
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
