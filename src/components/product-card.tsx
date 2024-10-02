import { Button, CardSubtitle, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../slices/cart-slice';

type Props = {
  title: string;
  description: string;
  price: number;
  id: number;
  image: string;
  isInCart: boolean;
};

function ProductCard({
  title,
  description,
  price,
  id,
  image,
  isInCart
}: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
  };

  return (
    <Card
      className='shadow-sm p-2'
      style={{ width: '100%', maxWidth: '20rem' }}
    >
      <Card.Img
        height={500}
        width={500}
        style={{ height: '15rem' }}
        className='object-fit-sm-contain w-auto'
        variant='top'
        src={image}
      />
      <Card.Body className='d-flex flex-column justify-content-between  mt-4'>
        <Container>
          <Card.Title>{title}</Card.Title>
          <CardSubtitle>{price}</CardSubtitle>
          <Card.Text className=' text-sm'>
            {description.length > 200
              ? description.slice(0, 200) + '...'
              : description}
          </Card.Text>
        </Container>

        <Container className='pt-4'>
          <Row>
            <Button onClick={handleAddToCart} disabled={isInCart}>
              {' '}
              Add to cart
            </Button>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
