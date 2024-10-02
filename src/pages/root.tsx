import { Container } from 'react-bootstrap';
import { OwnNavbar } from '../components/navbar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <Container className='bg-body min-vh-100' fluid>
      <OwnNavbar />
      <Container className='py-5'>
        <Outlet />
      </Container>
    </Container>
  );
};
