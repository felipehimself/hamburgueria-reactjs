import { Styles } from '../../constants/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import { IoTrash } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../services/slices/ordersSlice';
import CartBtnSend from './CartBtnSend/CartBtnSend';

import * as Style from './styles';

const CartSummary = () => {
  const { data } = useSelector((state: RootState) => state.ordersData);
  const dispatch = useDispatch();

  return (
    <>
      <Style.Section>
        <Style.Container>
          <Style.H4>Resumo do Pedido</Style.H4>
        </Style.Container>
        {data.map((item) => {
          return (
            <Style.Container key={item.id}>
              <Style.ItensContainer>
                <Style.SubContainer>
                  <Style.P className='item-flex'>{item.nome}</Style.P>
                  <Style.P>{item.tipo}</Style.P>
                </Style.SubContainer>
                <Style.SubContainer>
                  <Style.P>R$ {item.preco.toFixed(2)}</Style.P>
                  <IoTrash
                    style={{ cursor: 'pointer' }}
                    color={Styles.Colors.colorBlue}
                    onClick={() => dispatch(removeOrder(item.id))}
                  />
                </Style.SubContainer>
              </Style.ItensContainer>
            </Style.Container>
          );
        })}
        <Style.Container>
          <Style.NavLink to='/'>Adicionar Itens</Style.NavLink>
        </Style.Container>
        <Style.Container>
          <Style.ItensContainer>
            <Style.H4>Subtotal</Style.H4>
            <Style.H4>
              R${data.reduce((acc, curr) => acc + curr.preco, 0).toFixed(2)}
            </Style.H4>
          </Style.ItensContainer>
        </Style.Container>
      </Style.Section>
      {data.length > 0 && <CartBtnSend />}
    </>
  );
};

export default CartSummary;
