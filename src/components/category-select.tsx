import Form from 'react-bootstrap/Form';
import { useCategories } from '../hooks/use-categories';

export function CategorySelect() {
  const { status, categories, handleSelectCategory, searchedCategory } =
    useCategories();

  if (status === 'pending') {
    return <p>Loading categories</p>;
  }

  return (
    <Form.Select
      defaultValue={searchedCategory}
      onChange={(e) => handleSelectCategory(e.target.value)}
      aria-label='Default select example'
    >
      <option value={'all'}>All categories</option>
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
  );
}
