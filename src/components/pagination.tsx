import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const page = parseInt(searchParams.get("page") ?? "1");

  const handlePagination = (page: number) => {
    if (page > totalPages + 1) {
      return;
    }

    setSearchParams((search) => {
      search.set("page", `${page}`);
      return search;
    });
    navigate({
      pathname: location.pathname,
      search: "?" + searchParams.toString(),
    });
  };

  const arr = [];

  for (let i = 0; i < totalPages; i++) {
    arr.push(i + 1);
  }
  return (
    <ButtonGroup aria-label="Basic example">
      {arr.map((btn) => (
        <Button
          onClick={() => handlePagination(btn)}
          disabled={page === btn}
          style={{ width: "4rem" }}
        >
          {btn}
        </Button>
      ))}
    </ButtonGroup>
  );
};
