import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { OwnNavbar } from "../components/navbar";

export const Root = () => {
  return (
    <>
      <Container className="bg-body min-vh-100" fluid>
        <OwnNavbar />
        <Container
          fluid
          className="py-5  align-items-center d-flex flex-column"
        >
          <Outlet />
        </Container>
      </Container>
      <Toaster />
    </>
  );
};
