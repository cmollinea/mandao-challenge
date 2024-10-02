import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/products-slice';
import detailsSlice from '../slices/details-slice';
import cartSlice from '../slices/cart-slice';
import categorySlice from '../slices/category-slice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    details: detailsSlice,
    cart: cartSlice,
    categories: categorySlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
