import { Container, Placeholder, Row } from "react-bootstrap";

export const DetailsSkeleton = () => {
  return (
    <Container className="py-5">
      <Row className=" gap-5">
        <Placeholder animation="wave" className="col-lg-3 col-5">
          <Placeholder
            className="col-12"
            style={{
              borderRadius: "5px",
              background: "#d1d5db",
              height: "25rem",
            }}
          />
          <div className="mt-5">
            <Placeholder
              className="col-12"
              style={{
                borderRadius: "5px",
                background: "#d1d5db",
                height: "2rem",
              }}
            />
          </div>

          <div className="mt-1">
            <Placeholder
              className="col-12"
              style={{
                borderRadius: "5px",
                background: "#d1d5db",
                height: "2rem",
              }}
            />
          </div>
        </Placeholder>
        <Placeholder animation="wave" className="col-12 col-lg-8">
          <Row className="mt-1">
            <Placeholder
              className="col-4"
              style={{
                borderRadius: "5px",
                background: "#d1d5db",
                height: "4rem",
              }}
            />
          </Row>
          <Row className="mt-4">
            <Placeholder
              className="col-12"
              style={{
                borderRadius: "5px",
                background: "#d1d5db",
                height: "2rem",
              }}
            />
          </Row>
          <Row className="mt-1">
            <Placeholder
              className="col-12"
              style={{
                borderRadius: "5px",
                background: "#d1d5db",
                height: "2rem",
              }}
            />
          </Row>
          <Row className="mt-5">
            <Placeholder.Button
              className="col-4"
              style={{ borderRadius: "5px", height: "3rem" }}
            />
          </Row>
        </Placeholder>
      </Row>
    </Container>
  );
};
