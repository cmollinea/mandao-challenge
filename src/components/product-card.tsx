import { Button, CardSubtitle, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { addToCart } from "../slices/cart-slice";

type Props = {
  title: string;
  price: number;
  id: number;
  image: string;
  isInCart: boolean;
};

function ProductCard({ title, price, id, image, isInCart }: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
  };

  return (
    <Card
      className="shadow-sm p-2"
      style={{ width: "100%", maxWidth: "400px" }}
    >
      <Card.Img
        height={500}
        width={500}
        style={{ height: "15rem" }}
        className="object-fit-sm-contain w-auto"
        variant="top"
        src={image}
      />
      <Card.Body className="d-flex flex-column justify-content-between  mt-4">
        <Container>
          <CardSubtitle>
            <h4>${price}</h4>
          </CardSubtitle>
          <Link unstable_viewTransition to={`/product/${id}`}>
            <Card.Title>
              <h5>{title}</h5>
            </Card.Title>
          </Link>{" "}
        </Container>

        <Container className="pt-4">
          <Row>
            <Button
              className="d-flex gap-1 justify-content-center"
              onClick={handleAddToCart}
              disabled={isInCart}
              variant={isInCart ? "success" : "primary"}
            >
              {isInCart ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height={24}
                    width={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>{" "}
                  <span>Already in cart</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height={24}
                    width={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>{" "}
                  <span>Add to cart</span>
                </>
              )}
            </Button>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
