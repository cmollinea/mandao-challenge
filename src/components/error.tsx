import { Col } from "react-bootstrap";

type Props = {
  code?: string;
  message?: string;
};

export const Error = ({
  code = "UNKOWN_ERROR",
  message = "Oops Something went wrong",
}: Props) => {
  return (
    <Col className="justify-content-center col-4 bg-secondary bg-opacity-25 p-5 text-center">
      <div></div>
      <h4 className=" text text-danger">{message}</h4>
      <p className=" opacity-50">{code}</p>
    </Col>
  );
};
