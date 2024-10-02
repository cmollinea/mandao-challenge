import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getProducts } from '../slices/products-slice';
import { useFilters } from './use-filters';

export const useProducts = () => {
  const { status, products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const filteredProducts = useFilters(products);

  useEffect(() => {
    dispatch(getProducts('/products'));
  }, [dispatch]);

  return { status, products: filteredProducts };
};
