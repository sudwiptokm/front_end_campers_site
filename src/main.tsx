import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import TestComponent from "./components/TestComponent.tsx";
import AboutUsPage from "./pages/AboutUs.tsx";
import CartPage from "./pages/Cart.tsx";
import CheckoutPage from "./pages/Checkout.tsx";
import Home from "./pages/Home.tsx";
import IndividualProduct from "./pages/IndividualProduct.tsx";
import OrderConfirmationPage from "./pages/OrderConfirmationPage.tsx";
import ProductManagement from "./pages/ProductManagement.tsx";
import ProductsPage from "./pages/Products.tsx";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/management",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/success",
        element: <OrderConfirmationPage />,
      },
      {
        path: "/product/:id",
        element: <IndividualProduct />,
      },
      {
        path: "/test/:id",
        element: <TestComponent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
