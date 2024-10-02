import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '.';
import { Product } from '../types';
import { useEffect } from 'react';
import { getProducts } from '../slices/products-slice';

export const useFilters = (products: Product[]) => {
  const [searchparams] = useSearchParams();
  const dispatch = useAppDispatch();

  const title = searchparams.get('title');
  const category = searchparams.get('category');

  let filteredProducts: Product[] = [];

  useEffect(() => {
    if (category) {
      dispatch(getProducts(`/products/category/${category}`));
    }
  }, [category, dispatch]);

  if (title) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );
  } else {
    filteredProducts = products;
  }

  return { filteredProducts };
};
