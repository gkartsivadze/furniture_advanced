import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import App from './App.jsx'
import Home from './directions/Home.jsx'
import ProductPage from './directions/ProductPage.jsx'
import AboutPage from './directions/AboutPage.jsx'
import CartPage from './directions/CartPage.jsx'
import CollectionPage from './directions/CollectionPage.jsx'

import './styling/index.scss'
import Lists from './directions/Lists.jsx'

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="product_page/:productId" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="list/:filterOptions" element={<Lists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
