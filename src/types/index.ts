export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate?: number;
    count?: number;
  };
}

export type Status = "idle" | "pending" | "success" | "error";

export interface ICartProduct
  extends Pick<Product, "id" | "price" | "title" | "image"> {
  quantity: number;
}

export interface ICart {
  productsInCart: ICartProduct[];
}

type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "all";

export interface ICategorySlice {
  categories: Categories[];
  status: "idle" | "success" | "error" | "pending";
}

export interface IDetails {
  status: Status;
  details?: Product;
}

export interface IProductSlice {
  status: Status;
  products: Product[];
  error?: AppError;
}

export interface AppError {
  code?: string;
  message: string;
}
