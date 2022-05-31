import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store/store';
import { IoCart } from 'react-icons/io5';
import * as Style from './styles';

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
    <Style.BtnContainer animation={animation} show={!!data.length}>
      <Style.NavLink to='/cart'>
        <IoCart size={24} />
        Ver Carrinho
        <Style.Span>{data.length}</Style.Span>
      </Style.NavLink>
    </Style.BtnContainer>
  );
};

export default CartBtnAdd;
