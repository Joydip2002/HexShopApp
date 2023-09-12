import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductsPage from "./Pages/SingleProductsPage";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import ManProduct from "./Pages/ManProducts";
import WomenProducts from "./Pages/WomenProducts";
import KidsProducts from "./Pages/KidsProducts";
import AccessoriesPage from "./Pages/AccessoriesPage";
import AllProduct from "./Pages/AllProducts";
import BackToTop from "./Pages/BackToTop1.jsx";
import AdminDashboard from "./Admin/AdminDashboard";
import Mycart from "./Pages/Mycart";
import BuyButtonComponent from "./Pages/BuyButtonComponent";


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="single-product-page/:id" element={<SingleProductsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="men-product" element={<ManProduct />} />
          <Route path="women-product" element={<WomenProducts />} />
          <Route path="kids-product" element={<KidsProducts />} />
          <Route path="accessories-product" element={<AccessoriesPage />} />
          <Route path="all-product" element={<AllProduct />} />
          <Route path="back-To-Top" element={<BackToTop />} />
          <Route path="my-cart" element={<Mycart/>} />
          {/* <Route path="payment-page" element={<PaymentForm/>} /> */}
          <Route path="payment-page" element={<BuyButtonComponent/>} />
          <Route path="*" element={<ErrorPage />} />

          {/* Admin route */}
          <Route path="admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
