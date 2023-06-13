import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <ScrollToTop />
          <Header />
          <main className="main">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sales" element={<SalesPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
