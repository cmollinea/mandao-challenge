import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../hooks";
import { AppError, Product, Status } from "../types";
import { Error } from "./error";
import { NoItemsFounded } from "./no-items-founded";
import { Pagination } from "./pagination";
import { PaginationSkeleton } from "./pagination-skeleton";
import ProductCard from "./product-card";
import { ProductsGridContainer } from "./product-grid-container";
import { ProductsSkeletons } from "./products-skeleton";

type Props = {
  products: Product[];
  totalPages: number;
  status: Status;
  error: AppError | undefined;
};

export const ProductsToShow = ({
  totalPages,
  products,
  status,
  error,
}: Props) => {
  const { productsInCart } = useAppSelector((state) => state.cart);

  return (
    <Col className=" align-items-center flex-column gap-5 d-flex">
      <Row>
        {status === "pending" ? (
          <PaginationSkeleton />
        ) : (
          <Pagination totalPages={totalPages} />
        )}
      </Row>

      <Row className="w-100 flex-column align-items-center">
        {status === "pending" ? (
          <ProductsGridContainer>
            <ProductsSkeletons />
          </ProductsGridContainer>
        ) : status === "success" && products.length === 0 ? (
          <NoItemsFounded />
        ) : status === "success" ? (
          <ProductsGridContainer>
            {products?.map(({ id, title, image, price }) => {
              const isInCart = productsInCart.some(
                (productInCart) => productInCart.id === id,
              );
              return (
                <ProductCard
                  isInCart={isInCart}
                  key={id}
                  title={title}
                  price={price}
                  image={image}
                  id={id}
                />
              );
            })}
          </ProductsGridContainer>
        ) : status === "error" && error ? (
          <Error message={error?.message} code={error?.code} />
        ) : null}
      </Row>
    </Col>
  );
};
