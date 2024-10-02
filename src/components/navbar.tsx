import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export function OwnNavbar() {
  const [title, setTitle] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(location.pathname + '?title=' + title);
  };
  return (
    <Navbar
      expand='lg'
      className=' bg-body-tertiary border-bottom shadow-sm sticky-top z-3'
    >
      <Container fluid>
        <Nav.Item className='mx-2'>
          <NavLink to={'/'}>Mandao</NavLink>
        </Nav.Item>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Item>
              <NavLink to={'/cart'}>Cart</NavLink>
            </Nav.Item>
          </Nav>
          <Form onSubmit={handleSubmit} className='d-flex'>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button type='submit' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
