import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/root.tsx';
import { Cart } from './pages/cart.tsx';
import { ProductDetails } from './pages/product-detail.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsList } from './pages/product-list.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <ProductsList />, index: true },
      { path: '/cart', element: <Cart /> },
      {
        children: [{ path: '/product/:id', element: <ProductDetails /> }]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
