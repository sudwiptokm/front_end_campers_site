import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import TestComponent from "./components/TestComponent.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";
import IndividualProduct from "./pages/IndividualProduct.tsx";
import ProductManagement from "./pages/ProductManagement.tsx";
import ProductsPage from "./pages/Products.tsx";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
