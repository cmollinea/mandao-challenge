import { createSlice } from '@reduxjs/toolkit';
import { ICart } from '../types';

const localCart = localStorage.getItem('cart');

const initialState: ICart = {
  productsInCart: localCart ? JSON.parse(localCart) : []
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = { ...action.payload, quantity: 1 };
      state.productsInCart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.productsInCart));
    },
    removeFromCart(state, action) {
      const updatedCart = state.productsInCart.filter(
        (p) => p.id !== action.payload.id
      );
      state.productsInCart = updatedCart;
      localStorage.setItem('cart', JSON.stringify(state.productsInCart));
    },
    removeAll(state) {
      state.productsInCart = [];
      localStorage.setItem('cart', JSON.stringify(state.productsInCart));
    },

    reduceProduct(state, action) {
      const itemIndex = state.productsInCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.productsInCart[itemIndex].quantity > 1) {
        state.productsInCart[itemIndex].quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.productsInCart));
    },

    incrementProduct(state, action) {
      const itemIndex = state.productsInCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.productsInCart[itemIndex].quantity += 1;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct
} = CartSlice.actions;
export default CartSlice.reducer;
