import { Col, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CategorySelect } from "../components/category-select";
import { ClearFiltersButton } from "../components/clear-filters";
import { Error } from "../components/error";
import { NoItemsFounded } from "../components/no-items-founded";
import { Pagination } from "../components/pagination";
import { PaginationSkeleton } from "../components/pagination-skeleton";
import ProductCard from "../components/product-card";
import { ProductsGridContainer } from "../components/product-grid-container";
import { ProductsSkeletons } from "../components/products-skeleton";
import { SearchForm } from "../components/search-form";
import { useAppSelector } from "../hooks";
import { useProducts } from "../hooks/use-products";

export const ProductsList = () => {
  const { productsInCart } = useAppSelector((state) => state.cart);
  const { status, products, error, totalResults } = useProducts();

  console.log(status);

  if (error) {
    return <Error code={error.code} message={error.message} />;
  }

  return (
    <>
      {/* <Container className=" bg-body-secondary">
        <h1 className=" py-5">Fake Store</h1>
      </Container> */}
      <Container
        fluid
        className="d-flex py-5 flex-column flex-md-row justify-content-center"
      >
        <Row style={{ gap: "5rem" }} className="w-100 justify-content-center ">
          <Col
            className=" col-2 gap-4 d-flex flex-column align-self-center align-self-md-start"
            style={{ minWidth: "20rem" }}
          >
            <Row>
              <SearchForm />
            </Row>
            <Row>
              <CategorySelect />
            </Row>
            <Row>
              <ClearFiltersButton />
            </Row>

            {status === "pending" ? (
              <Row className="col-12">
                <div className="d-flex gap-1 align-items-center">
                  <Spinner size="sm" /> <small>Loading results...</small>
                </div>
              </Row>
            ) : (
              <small>{totalResults} result(s)</small>
            )}
          </Col>
          <Col className="justify-content-center align-items-center flex-column gap-5 d-flex">
            <Row>
              {status === "pending" ? (
                <PaginationSkeleton />
              ) : (
                <Pagination totalPages={totalResults / 5} />
              )}
            </Row>
            <Row className="w-100 flex-column">
              {status === "pending" ? (
                <ProductsGridContainer>
                  <ProductsSkeletons />
                </ProductsGridContainer>
              ) : products.length > 0 ? (
                <ProductsGridContainer>
                  {" "}
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
              ) : (
                <NoItemsFounded />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
