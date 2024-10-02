import { Container } from 'react-bootstrap';
import { OwnNavbar } from '../components/navbar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <Container className='bg-body min-vh-100' fluid>
      <OwnNavbar />
      <Container fluid className='py-5  align-items-center d-flex flex-column'>
        <Outlet />
      </Container>
    </Container>
  );
};
