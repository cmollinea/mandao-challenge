import {
  Button,
  Card,
  CardSubtitle,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import {
  CartProduct,
  incrementProduct,
  reduceProduct
} from '../slices/cart-slice';
import { useDispatch } from 'react-redux';

export const ProductInCartCard = ({
  title,
  price,
  quantity,
  image,
  id
}: CartProduct) => {
  const dispatch = useDispatch();
  return (
    <Card className=' shadow-sm p-4'>
      <Row className=' align-items-center'>
        <Col className=' flex-grow-0 w-25'>
          <Card.Img
            height={500}
            width={500}
            style={{ height: '4rem', width: '4rem' }}
            className='object-fit-sm-contain'
            variant='top'
            src={image}
          />
        </Col>
        <Col className=' flex-grow-1 align-self-start'>
          <Card.Body className='d-flex flex-column justify-content-between '>
            <Container>
              <Card.Title>{title}</Card.Title>
              <CardSubtitle>{price}</CardSubtitle>
            </Container>
          </Card.Body>
        </Col>

        <Row className='pt-4 w-auto'>
          <Col>
            <Button
              disabled={quantity <= 1}
              onClick={() => dispatch(reduceProduct({ id }))}
            >
              -
            </Button>
          </Col>
          <Col>
            <p>{quantity}</p>
          </Col>
          <Col>
            <Button onClick={() => dispatch(incrementProduct({ id }))}>
              +
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
};
