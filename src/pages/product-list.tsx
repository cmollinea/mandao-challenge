// import { useEffect } from 'react';
import { useAppSelector } from '../hooks';
// import { getProducts } from '../slices/products-slice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/product-card';
import { useFilters } from '../hooks/use-filters';
import { CategorySelect } from '../components/category-select';

export const ProductsList = () => {
  const { productsInCart } = useAppSelector((state) => state.cart);
  const { status, filteredProducts } = useFilters();

  console.log(filteredProducts, status);

  return (
    <>
      <Container>
        <Row>
          <CategorySelect />
        </Row>
        <Row className=' gap-4  justify-content-center'>
          {filteredProducts.map(({ id, title, description, image, price }) => {
            const isInCart = productsInCart.some(
              (productInCart) => productInCart.id === id
            );
            return (
              <ProductCard
                isInCart={isInCart}
                key={id}
                title={title}
                description={description}
                price={price}
                image={image}
                id={id}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};
