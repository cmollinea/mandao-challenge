import { Col, Row } from "react-bootstrap";
import { ProductInCartCard } from "../components/product-in-cart-card";
import { useAppSelector } from "../hooks";

export const Cart = () => {
  const { productsInCart } = useAppSelector((state) => state.cart);

  console.log(productsInCart);

  const totalPrice = productsInCart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <Col className="d-flex flex-column align-items-center">
      <Row className="gap-2 p-0 bg-body-tertiary">
        {productsInCart?.map(({ id, quantity, title, image, price }) => (
          <Row key={id} className="mx-auto">
            <ProductInCartCard
              id={id}
              quantity={quantity}
              title={title}
              image={image}
              price={price}
            />
          </Row>
        ))}
      </Row>
      <Row
        style={{ background: "#e5e7eb" }}
        className="col-lg-6 mt-2 py-5 px-2"
      >
        <Row className=" justify-content-between align-content-between">
          {productsInCart.map((product) => (
            <Row key={product.id}>
              <Col>
                <p>{product.title}</p>
              </Col>
              <Col className="text-end fw-bold text-success">
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </Col>
            </Row>
          ))}
        </Row>
        <hr />
        <Row className="align-content-center fw-bolder">
          <Col>
            <p>Total Price</p>
          </Col>
          <Col className="fw-bolder text-end text-success-emphasis display-6">
            <p>${totalPrice.toFixed(2)}</p>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};
