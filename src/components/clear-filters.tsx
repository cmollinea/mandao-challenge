import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ClearFiltersButton = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/')}>Clear Filters</Button>;
};
