import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import IndexLayout from "./Components/Layout/IndexLayout";
import Add from "./Pages/Add";
import Details from "./Pages/Details";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    element: <IndexLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // Users and Its Children
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/Add",
        element: <Add />,
      },
      {
        path: "users/:userId",
        element: <Details />,
      },
      // Products and Its Children
      {
        path: "products",
        element: <Users />,
      },
      {
        path: "products/Add",
        element: <Add />,
      },
      {
        path: "products/:productId",
        element: <Details />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
