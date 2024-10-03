import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./pages/cart.tsx";
import { ProductDetails } from "./pages/product-detail.tsx";
import { ProductsList } from "./pages/product-list.tsx";
import { Products } from "./pages/products.tsx";
import { Root } from "./pages/root.tsx";
import store from "./store/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <ProductsList />, index: true },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Products />, index: true },
      {
        children: [{ path: "/products/:id", element: <ProductDetails /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
