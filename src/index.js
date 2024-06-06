import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HotelsSearch from './routes/listings/HotelsSearch';
import UserProfile from './routes/user-profile/UserProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import { makeServer } from './mirage/mirageServer';
import HotelDetails from './routes/hotel-details/HotelDetails';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import AboutUs from './routes/about-us/AboutUs';
import BaseLayout from './routes/layouts/base-layout/BaseLayout';
import ForgotPassword from './routes/forgot-password/ForgotPassword';
import Checkout from 'routes/checkout/Checkout';
import BookingConfirmation from 'routes/booking-confimation/BookingConifrmation';

// if (process.env.NODE_ENV === 'development') {
//   makeServer();
// }

makeServer();

const router = createBrowserRouter([
  {
    path: '/trip-planner/',
    element: <BaseLayout />,
    children: [
      {
        path: '/trip-planner/',
        element: <Home />,
      },
      {
        path: '/trip-planner/hotels',
        element: <HotelsSearch />,
      },
      {
        path: '/trip-planner/about-us',
        element: <AboutUs />,
      },
      {
        path: '/trip-planner/user-profile',
        element: <UserProfile />,
      },
      {
        path: '/trip-planner/login',
        element: <Login />,
      },
      {
        path: '/trip-planner/register',
        element: <Register />,
      },
      {
        path: '/trip-planner/hotel/:hotelId',
        element: <HotelDetails />,
      },
      {
        path: '/trip-planner/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/trip-planner/checkout',
        element: <Checkout />,
      },
      {
        path: '/trip-planner/booking-confirmation',
        element: <BookingConfirmation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
