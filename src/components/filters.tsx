import { Col, Row, Spinner } from "react-bootstrap";
import { Status } from "../types";
import { CategorySelect } from "./category-select";
import { ClearFiltersButton } from "./clear-filters";
import { SearchForm } from "./search-form";

export const Filters = ({
  totalResults,
  status,
}: {
  totalResults: number;
  status: Status;
}) => {
  return (
    <Col
      className=" col-2 gap-4 d-flex flex-column align-self-center align-self-md-start"
      style={{ minWidth: "20rem" }}
    >
      <Row>
        <SearchForm />
      </Row>
      <Row>
        <CategorySelect />
      </Row>
      <Row>
        <ClearFiltersButton />
      </Row>

      {status === "pending" ? (
        <Row className="col-12">
          <div className="d-flex gap-1 align-items-center justify-content-center">
            <Spinner size="sm" /> <small>Loading results...</small>
          </div>
        </Row>
      ) : (
        <small className="text-center">{totalResults} result(s)</small>
      )}
    </Col>
  );
};
