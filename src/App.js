import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Cart />
        <Router>
          <ScrollToTop />
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<SalesPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
