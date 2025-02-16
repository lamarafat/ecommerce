import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import DashLayout from './layouts/DashLayout.jsx';
import Home from './assets/pages/user/home/Home.jsx';
import Cart from './assets/pages/user/cart/Cart.jsx';
import Product from './assets/pages/user/product/Product.jsx';
import Shop from './assets/pages/user/shop/Shop.jsx';
import Auth from './layouts/Auth.jsx';
import Logup from './assets/pages/user/register/Logup.jsx';
import Login from './assets/pages/user/register/Login.jsx';
import CateProd from './assets/pages/user/product/CateProd.jsx';
import Details from './assets/pages/user/product/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />, 
    children: [
      { path: 'home', element: <Home /> }, 
      { path: 'cart', element: <Cart /> },
      { path: 'product', element: <Product /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cateprod/:id', element: <CateProd /> },
      { path: 'details/:id', element: <Details /> },
    ],
  },
  {
    path:'/auth',
    element: <Auth />, 
    children: [
      { path: 'signin', element: <Login /> }, 
      { path: 'signup', element: <Logup /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashLayout />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
);