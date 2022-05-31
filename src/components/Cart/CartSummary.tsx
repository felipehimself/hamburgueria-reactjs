import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import { IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../services/slices/ordersSlice';
import CartBtnSend from './CartBtnSend/CartBtnSend';

const CartSummary = () => {
  const { data } = useSelector((state: RootState) => state.ordersData);
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <div className='container'>
          <h4 className='title'>Resumo do Pedido</h4>
        </div>
        {data.map((item) => {
          return (
            <div className='container' key={item.id}>
              <div className='itens-container'>
                <div className='sub-container'>
                  <p className='item-title item-flex'>{item.nome}</p>
                  <p className='item-title'>{item.tipo}</p>
                </div>
                <div className='sub-container'>
                  <p className='item-price'>R$ {item.preco.toFixed(2)}</p>
                  <IoTrash
                    style={{ cursor: 'pointer' }}
                    color={Styles.Colors.colorBlue}
                    onClick={() => dispatch(removeOrder(item.id))}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className='container'>
          <Link className='add-itens' to='/'>
            Adicionar Itens
          </Link>
        </div>
        <div className='container'>
          <div className='itens-container'>
            <h4 className='title'>Subtotal</h4>
            <h4 className='title'>
              R${data.reduce((acc, curr) => acc + curr.preco, 0).toFixed(2)}
            </h4>
          </div>
        </div>
      </Wrapper>
      {data.length > 0 && <CartBtnSend />}
    </>
  );
};

const Wrapper = styled.article`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
  background-color: ${Styles.Colors.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;

  .title {
    text-align: center;
  }
  .container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 1.4rem;
  }

  .item-title {
    color: ${Styles.Colors.colorGray};
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .item-flex {
    width: 14rem;
  }

  .add-itens {
    display: block;
    font-size: 2.2rem;
    text-align: center;
    text-decoration: none;
    color: ${Styles.Colors.colorBlue};
    transition: all 0.3s ease;
  }

  .add-itens:hover {
    text-decoration: underline solid ${Styles.Colors.colorBlue};
  }

  .title {
    font-size: 2.2rem;
    color: ${Styles.Colors.colorGray};
    font-weight: 600;
  }

  .itens-container {
    display: flex;
    justify-content: space-between;
  }

  .sub-container {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    gap: 2rem;
  }
`;
export default CartSummary;
