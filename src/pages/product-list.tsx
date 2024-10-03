import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Filters } from "../components/filters";
import { ProductsToShow } from "../components/products-to-show";
import { useProducts } from "../hooks/use-products";

export const ProductsList = () => {
  const { totalPages, totalResults, products, error, status } = useProducts();
  return (
    <>
      <Container
        fluid
        className="d-flex py-5 flex-column flex-md-row justify-content-center"
      >
        <Row style={{ gap: "5rem" }} className="w-100 justify-content-center ">
          <Filters status={status} totalResults={totalResults} />
          <ProductsToShow
            totalPages={totalPages}
            error={error}
            products={products}
            status={status}
          />
        </Row>
      </Container>
    </>
  );
};
