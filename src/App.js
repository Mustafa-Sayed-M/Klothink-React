import React from "react";
import { Route, Routes } from "react-router-dom";

// Components:
import Footer from "./Components/Global_Components/Footer/Footer";
import Navbar from "./Components/Global_Components/Navbar/Navbar";

// Pages:
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Products/Product";
import Support from "./Pages/Support";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={'/products/:productId'} element={<Product />} />
        <Route path={'/support'} element={<Support />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;