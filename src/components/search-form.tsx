import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchParams.set("title", title);
    searchParams.set("page", "1");
    console.log(searchParams.toString());

    navigate({
      pathname: location.pathname,
      search: "?" + searchParams.toString(),
    });
  };

  return (
    <Form className="w-100 d-flex p-0 gap-1" onSubmit={handleSubmit}>
      <Form.Control
        onChange={(e) => setTitle(e.target.value)}
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="w-100"
      />
      <Button type="submit" variant="dark">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Button>
    </Form>
  );
};
