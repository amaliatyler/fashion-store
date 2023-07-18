import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";
import CartPage from "./pages/cartPage/CartPage";
import FavoritePage from "./pages/favorite/FavoritePage";
import Drawer from "./components/drawer/Drawer";
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  /* отправляем запрос на бэкенд только при первом рендере */
  React.useEffect(() => {
    async function fetchData() {
      // setIsLoading(true);
      const cartResponse = await axios.get(
        "https://64a582c300c3559aa9bfd40f.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://64afe46ac60b8f941af4d1c1.mockapi.io/favorite"
      );
      const itemsResponse = await axios.get(
        "https://64a582c300c3559aa9bfd40f.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://64a582c300c3559aa9bfd40f.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://64a582c300c3559aa9bfd40f.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://64a582c300c3559aa9bfd40f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* добавление товара в избранное */

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://64afe46ac60b8f941af4d1c1.mockapi.io/favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
      } else {
        const { data } = await axios.post(
          "https://64afe46ac60b8f941af4d1c1.mockapi.io/favorite",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Что-то пошло не так. Не удалось добавить товар в избранное");
    }
  };

  /* обработка поля поиска */
  const [searchValue, setSearchValue] = React.useState("");

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={ { items, cartItems, favorites, isItemAdded, onAddToFavorite, setIsDrawerOpened, setCartItems } }>
      <div className="App">
        <div className="wrapper">
          {isDrawerOpened && (
            <Drawer
              onClose={() => setIsDrawerOpened(false)}
              items={cartItems}
              setCartItems={setCartItems}
              onRemoveFromCart={onRemoveFromCart}
            />
          )}
          <Header
            handleCartClick={() => {
              setIsDrawerOpened(true);
            }}
          />
          <div className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onPlus={(obj) => onAddToCart(obj)}
                    items={items}
                    cartItems={cartItems}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/sales"
                element={
                  <SalesPage
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    handleInput={handleInput}
                  />
                }
              />
              <Route
                path="/favorite"
                element={
                  <FavoritePage />
                }
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
