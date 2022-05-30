import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import { Styles } from '../../constants/styles';
import { IoCart } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartBtnAdd = () => {
  const [animation, setAnimation] = useState(false);
  const { data } = useSelector((state: RootState) => state.ordersData);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, [data]);

  return (
    <Wrapper animation={animation} show={!!data.length}>
      <Link className='link' to='/cart'>
        <IoCart size={24} />
        Ver Carrinho
        <span className='amount'>{data.length}</span>
      </Link>
    </Wrapper>
  );
};

interface IStyle {
  show: boolean;
  animation: boolean;
}

const shake = keyframes`
  0% { transform: translateX(-10px)}
  16% { transform: translateX(10px) }
  33% { transform: translateX(-10px)}
    50% { transform: translateX(10px)}
    66% { transform: translateX(-10px)}
    83% {transform: translateX(10px)}
    100% { transform: translateX(0px) }
`;

const Wrapper = styled.div<IStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background-color: ${Styles.Colors.colorPrimary};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  visibility: ${(props) => (props.show ? 'visbile' : 'hidden')};
  animation-name: ${(props) => (props.animation ? shake : undefined)};
  animation-duration: 0.4s;
  animation-iteration-count: 2s;

  .link {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1rem 0.5rem;
    color: ${Styles.Colors.colorWhite};
    text-decoration: none;
  }

  .amount {
    background-color: ${Styles.Colors.colorOrange};
    width: 1.6rem;
    height: 1.6rem;
    margin-left: -1rem;
    margin-top: -1rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;
export default CartBtnAdd;
