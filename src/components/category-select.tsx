import { Placeholder } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useCategories } from "../hooks/use-categories";

export function CategorySelect() {
  const { status, categories, handleSelectCategory, searchedCategory } =
    useCategories();

  return (
    <>
      {status === "pending" ? (
        <>
          <Placeholder
            animation="wave"
            style={{
              borderRadius: "5px",
              background: "#d1d5db",
              height: "2.5rem",
            }}
          />
        </>
      ) : categories.length > 0 ? (
        <Form.Select
          defaultValue={searchedCategory}
          onChange={(e) => handleSelectCategory(e.target.value)}
          aria-label="Default select example"
        >
          <option value={"all"}>All categories</option>
          {categories?.map((category) => {
            console.log(category, searchedCategory);
            return (
              <option
                key={category}
                id={category}
                value={category}
                // selected={category === searchedCategory}
              >
                {category}
              </option>
            );
          })}
        </Form.Select>
      ) : (
        <small className="text-danger">An error ocurred</small>
      )}
    </>
  );
}
