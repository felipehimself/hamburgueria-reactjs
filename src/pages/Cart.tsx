import styled from 'styled-components';
import { Container } from '../shared/Container';
import CartSummary from '../components/Cart/CartSummary';

const Cart = () => {
  return (
    <Container margin='7rem auto'>
      <CartSummary/>
    </Container>
  );
};

const Wrapper = styled.section`
  margin: 10rem auto;
`;
export default Cart;
