import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CatagoryProvider } from "./CatagoryContext";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <CatagoryProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CatagoryProvider>
    </Router>
  );
}

export default App;
