import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Auctions from './Pages/Auctions';
import Marketplace from './Pages/Marketplace';
import ProductDetail from './Pages/ProductDetail';
import LiveAuction from './Pages/LiveAuction';
import AuctionDrops from './Pages/AuctionDrops';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';
import Shipping from './Pages/Shipping';
import PaymentDetails from './Pages/PaymentDetails';
import ThankYou from './Pages/ThankYou';
import PageLayout from './PageLayout';
import Uploader from './Pages/Uploader';

const router = createBrowserRouter([
  {
    element:<PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/upload",
        element:<Uploader />
      },
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/auctions",
        element:<Auctions />,
      },
      {
        path:"/products",
        element:<Marketplace />,
      },
      {
        path:"/products/:productId",
        element: <ProductDetail />,
      },
      {
        path:"/auctions/live/drops",
        element:<AuctionDrops />,
      },
      {
        path:"/products/checkout",
        element: <Checkout />,
        children: [
          {
            path:"cart",
            element: <Cart />,
          },
          {
            path:"shipping-details",
            element: <Shipping />,
          },
          {
            path:"payment-details",
            element: <PaymentDetails />,
          },
          {
            path:"thanks",
            element: <ThankYou />,
          },
        ]
      },
    ]
  },
  {
    path:"/auctions/live/:auctionId",
    element:<LiveAuction />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
