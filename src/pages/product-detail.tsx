import { useEffect } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/back-button";
import { DetailsSkeleton } from "../components/details-skeleton";
import { Error } from "../components/error";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart } from "../slices/cart-slice";
import { getDetails, reset } from "../slices/details-slice";

export const ProductDetails = () => {
  const { details, status, error } = useAppSelector((state) => state.details);
  const { productsInCart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const isInCart = productsInCart.some((product) => product.id === details?.id);
  const params = useParams();

  const handleAddtoCart = () => {
    if (details) {
      dispatch(
        addToCart({
          id: details.id,
          title: details.title,
          price: details.price,
          image: details.image,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(getDetails(params.id));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, params.id]);

  if (status === "pending") {
    return <DetailsSkeleton />;
  }

  if (error || status === "error") {
    return <Error code={error?.code} message={error?.message} />;
  }

  return (
    <>
      <BackButton />{" "}
      <Container className="py-5">
        {details && (
          <Row className=" gap-5">
            {" "}
            <Col className="col-12 col-lg-3 ">
              <img
                style={{ height: "20rem" }}
                className="col-8 col-sm-5 col-md-4 col-lg-10"
                src={details?.image}
              />
              <div className="mt-5">
                <Badge bg="success">{details.category}</Badge>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height={16}
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <small>
                  {details.rating.rate} out of 5 ({details.rating.count} votes)
                </small>
              </div>
            </Col>
            <Col className="col-12 col-lg-8">
              <h1 className="display-5 text-success">${details?.price}</h1>
              <h3 className="display-6">{details?.title}</h3>
              <p>{details?.description}</p>

              <Button
                variant={isInCart ? "success" : "primary"}
                onClick={handleAddtoCart}
                disabled={isInCart}
                className="d-flex align-items-center justify-content-center gap-1 mt-5 col-6 col-lg-4"
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
                    </svg>
                    <span>Already in Cart</span>
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
                    </svg>
                    <span>Add to Cart</span>
                  </>
                )}
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
