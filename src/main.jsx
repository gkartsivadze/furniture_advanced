import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import App from './App.jsx'
import Home from './directions/Homepage/Home.jsx'
import ProductPage from './directions/ProductPage/ProductPage.jsx'
import AboutPage from './directions/AboutPage/AboutPage.jsx'
import CollectionPage from './directions/CollectionPage/CollectionPage.jsx'

import './styling/index.scss'

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
          <Route path="collection" element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
