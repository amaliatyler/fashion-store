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
import AppContext from "./context";
import { Orders } from "./pages/orders/Orders";
import Card from "./components/card/Card";
import { Product } from "./pages/productPage/Product";

function App() {
  const [items, setItems] = React.useState([]);
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  /* отправляем запрос на бэкенд только при первом рендере */
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://64a582c300c3559aa9bfd40f.mockapi.io/cart"),
            axios.get("https://64afe46ac60b8f941af4d1c1.mockapi.io/favorite"),
            axios.get("https://64a582c300c3559aa9bfd40f.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }

    fetchData();
  }, []);


  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://64a582c300c3559aa9bfd40f.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post("https://64a582c300c3559aa9bfd40f.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveFromCart = (id) => {
    try {
      axios.delete(`https://64a582c300c3559aa9bfd40f.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  /* добавление товара в избранное */

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://64afe46ac60b8f941af4d1c1.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
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
      console.error(error);
    }
  };

  /* обработка поля поиска */
  const [searchValue, setSearchValue] = React.useState("");

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const countSalePrice = function(price, sale) {
    let carry = sale ? sale : 0;
    return Math.round(Number(price) - ((Number(price) * Number(carry)) / 100));
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        searchValue,
        handleInput, 
        setSearchValue,
        isItemAdded,
        onAddToFavorite,
        setIsDrawerOpened,
        setCartItems,
        countSalePrice
      }}
    >
      <div className="App">
        <div className="wrapper">
          <Drawer
            onClose={() => setIsDrawerOpened(false)}
            items={cartItems}
            setCartItems={setCartItems}
            onRemoveFromCart={onRemoveFromCart}
            opened={isDrawerOpened}
          />

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
                    isLoading={isLoading}
                    onPlus={(obj) => onAddToCart(obj)}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                  />
                }
              />
              <Route path="/favorite" element={<FavoritePage onPlus={(obj) => onAddToCart(obj)}/>} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
