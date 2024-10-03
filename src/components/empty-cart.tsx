import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <Row className=" justify-content-center align-content-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"8rem"}
        height={"8rem"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" text-danger"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" />
        <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
        <path d="M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
        <path d="M3 3l18 18" />
      </svg>
      <h4 className=" text-danger-emphasis">Your cart is empty...</h4>
      <Link
        unstable_viewTransition
        to={"/"}
        className="bg-primary text-white text-decoration-none col-5 mt-5 p-2 fw-bold rounded-3"
      >
        Start Shopping
      </Link>
    </Row>
  );
};
