import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalesPage from "./pages/sales/Sales";
import CartPage from "./pages/cartPage/CartPage";
import Drawer from "./components/drawer/Drawer";

// function App() {
//   return (
//     <div className="App">
//       <div className="wrapper">
//         {/* <Cart /> */}
//         <Router>
//           <ScrollToTop />
//           <Header />
//           <main className="main">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/sales" element={<SalesPage />} />
//               <Route path="/cart" element={<CartPage/>}/>
//             </Routes>
//           </main>
//           <Footer />
//         </Router>
//       </div>
//     </div>
//   );
// }

function App() {
  return(
    <div className="App">
      <div className="wrapper">
        <Drawer />
        <Header />
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
