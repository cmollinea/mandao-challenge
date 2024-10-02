import { Container, Row } from 'react-bootstrap';
import { ProductInCartCard } from '../components/product-in-cart-card';
import { useAppSelector } from '../hooks';

export const Cart = () => {
  const { productsInCart } = useAppSelector((state) => state.cart);

  const totalPrice = productsInCart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <Container fluid='sm' className='p-4'>
      <Row className='gap-2 w-100 bg-body-tertiary'>
        {productsInCart?.map(({ id, quantity, title, image, price }) => (
          <Row key={id}>
            <ProductInCartCard
              id={id}
              quantity={quantity}
              title={title}
              image={image}
              price={price}
            />
          </Row>
        ))}
      </Row>
      <Row className='bg-secondary'>
        <div className='d-flex justify-content-between'>
          <div>
            <p>Total Price</p>
          </div>
          <div>
            <p>{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};
