import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { getCategories } from '../slices/category-slice';

export const useCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedCategory = searchParams.get('category') ?? 'all';
  const location = useLocation();
  const navigate = useNavigate();
  const { categories, status } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleSelectCategory = (selectedCategory: string) => {
    setSearchParams((search) => search.append('category', selectedCategory));
    navigate({
      pathname: location.pathname,
      search: '?' + searchParams.toString()
    });
  };

  useEffect(() => {
    dispatch(getCategories('/products/categories'));
  }, [dispatch]);

  return { categories, status, handleSelectCategory, searchedCategory };
};
