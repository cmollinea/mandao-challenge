import { Col, Container, Row } from "react-bootstrap";

export const NoItemsFounded = () => {
  return (
    <Container
      fluid
      className="text-danger w-100 d-flex flex-column align-items-center justify-content-center text-center align-self-center"
    >
      <Col style={{ minWidth: "15rem" }} className="col-12">
        <Row>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height={"8rem"}
            width={"8rem"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </Row>
        <Row className=" justify-content-center mt-2 ">
          <h4>No products founded for your filters</h4>
        </Row>
      </Col>
    </Container>
  );
};
