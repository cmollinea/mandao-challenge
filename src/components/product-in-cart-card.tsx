import {
  Button,
  Card,
  CardSubtitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementProduct, reduceProduct } from "../slices/cart-slice";
import { ICartProduct } from "../types";
import { ConfirmModal } from "./confirm-modal";

export const ProductInCartCard = ({
  title,
  price,
  quantity,
  image,
  id,
}: ICartProduct) => {
  const dispatch = useDispatch();
  return (
    <Card className="shadow-sm p-4 mx-auto col-lg-6 text-center text-sm-start">
      <Row className=" flex-column flex-sm-row align-items-center">
        <Col className=" flex-grow-0 w-25">
          <Card.Img
            height={500}
            width={500}
            style={{ height: "4rem", width: "4rem" }}
            className="object-fit-sm-contain"
            variant="top"
            src={image}
          />
        </Col>
        <Col className=" flex-grow-1 align-self-start">
          <Card.Body className="d-flex flex-column justify-content-between ">
            <Container>
              <Card.Title>
                <Link unstable_viewTransition to={`/products/${id}`}>
                  {title}
                </Link>
              </Card.Title>
              <CardSubtitle className="text-success">${price}</CardSubtitle>
            </Container>
          </Card.Body>
        </Col>

        <Col className="pt-4 col-lg-6">
          <Row className=" justify-content-center justify-sm-content-end">
            <Col className=" flex-grow-0">
              <Button
                disabled={quantity <= 1}
                onClick={() => dispatch(reduceProduct({ id }))}
              >
                -
              </Button>
            </Col>
            <Col className=" flex-grow-0">
              <p>{quantity}</p>
            </Col>
            <Col className=" flex-grow-0">
              <Button onClick={() => dispatch(incrementProduct({ id }))}>
                +
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <ConfirmModal id={id} />
    </Card>
  );
};
