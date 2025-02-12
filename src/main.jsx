import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import DashLayout from './layouts/DashLayout.jsx';
import Login from './assets/pages/user/register/Login.jsx';
import Logup from './assets/pages/user/register/Logup.jsx';
import Home from './assets/pages/user/home/Home.jsx';
import Cart from './assets/pages/user/cart/Cart.jsx';
import Product from './assets/pages/user/product/Product.jsx';
import Shop from './assets/pages/user/shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />, 
    children: [
      {
        path: 'register',
        element: <Outlet />, 
        children: [
          { path: 'login', element: <Login /> }, 
          { path: 'logup', element: <Logup /> }, 
        ],
      },
      { path: 'home', element: <Home /> }, 
      { path: 'cart', element: <Cart /> },
      { path: 'product', element: <Product /> },
      { path: 'shop', element: <Shop /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashLayout />, 
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);