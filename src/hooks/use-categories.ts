import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from ".";
import { getCategories } from "../slices/category-slice";

export const useCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedCategory = searchParams.get("category") ?? "all";
  const { categories, status } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleSelectCategory = (selectedCategory: string) => {
    setSearchParams((search) => {
      search.set("category", selectedCategory);
      searchParams.set("page", "1");
      return search;
    });
  };

  useEffect(() => {
    dispatch(getCategories("/products/categories"));
  }, [dispatch]);

  return { categories, status, handleSelectCategory, searchedCategory };
};
