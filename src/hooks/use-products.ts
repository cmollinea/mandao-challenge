import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from ".";
import { getProducts } from "../slices/products-slice";
import { Product } from "../types";

export const useProducts = () => {
  const { products, status, error } = useAppSelector((state) => state.products);
  const [searchparams] = useSearchParams();
  const dispatch = useAppDispatch();
  const title = searchparams.get("title");
  const category = searchparams.get("category") ?? "all";

  let filteredProducts: Product[] = [];

  useEffect(() => {
    dispatch(
      getProducts(
        category === "all" ? "/products" : `/products/category/${category}`,
      ),
    );
  }, [category, dispatch]);

  if (title) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase()),
    );
  } else {
    filteredProducts = products;
  }

  //Dummy Pagination
  const page = parseInt(searchparams.get("page") ?? "1");
  const totalPages = products?.length / 5;
  const productsRef = useRef<Product[] | null>(null);
  productsRef.current = filteredProducts;

  console.log(products);

  if (totalPages > 1) {
    filteredProducts = productsRef.current.slice((page - 1) * 5, page * 5);
  }

  return {
    products: filteredProducts,
    totalResults: productsRef.current.length,
    totalPages: productsRef.current.length / 5,
    status,
    error,
  };
};
