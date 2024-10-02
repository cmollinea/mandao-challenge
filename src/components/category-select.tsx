import Form from 'react-bootstrap/Form';
import { useCategories } from '../hooks/use-categories';

export function CategorySelect() {
  const { status, categories, handleSelectCategory, searchedCategory } =
    useCategories();

  return (
    <Form.Select
      onChange={(e) => handleSelectCategory(e.target.value)}
      aria-label='Default select example'
    >
      <option defaultChecked={searchedCategory === 'all'} value={'all'}>
        All categories
      </option>
      {categories?.map((category) => (
        <option
          id={category}
          value={category}
          defaultChecked={category === searchedCategory}
        >
          {category}
        </option>
      ))}
    </Form.Select>
  );
}
