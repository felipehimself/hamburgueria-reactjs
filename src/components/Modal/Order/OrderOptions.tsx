import { useState } from 'react';
import styled from 'styled-components';
import { Styles } from '../../../constants/styles';
import { IOrder, setModalOrder } from '../../../services/slices/modalOrderSlice';
import { useDispatch } from 'react-redux';
import { setOrderData } from '../../../services/slices/ordersSlice';
import Title from '../Title';

const Order: React.FC<IOrder> = ({ nome, descricao, img, itens }) => {
  const [order, setOrder] = useState({ notes: '', tipo: ''});
  
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setOrder((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCleanModalOrder = () => {
    dispatch(
      setModalOrder({
        nome: '',
        descricao: '',
        img: '',
        itens: [],
        isModalOpen: false,
      })
    );
  };

  const handleAddToCart = () => {

    if(!order.tipo) return;

    const [tipo, preco, id] = order.tipo.split('|');

    dispatch(
      setOrderData({
        notes: order.notes,
        tipo: tipo,
        id: Number(id),
        preco: Number(preco),
        img: img,
        nome:nome,
      })
    );
    handleCleanModalOrder()
  };


  return (
    <Wrapper>
      <button onClick={handleCleanModalOrder} className='btn-close'>
        &times;
      </button>
      <div>
        <Title>
          <span className='name'>{nome}</span>
        </Title>
        <p className='description'>{descricao}</p>
      </div>
      {itens!?.length > 0 && (
        <div>
          <Title>Selecione um tipo</Title>
          <div className='type-container'>
            {itens?.map((item) => {
              return (
                <div key={item.id} className='type-itens'>
                  <div>
                    <input
                      onClick={handleChange}
                      value={`${item.tipo}|${item.preco}|${item.id}`}
                      type='radio'
                      name='tipo'
                      id={item.tipo}
                      className='type-input'
                    />
                    <label htmlFor={item.tipo} className='type-text'>
                      {item.tipo}
                    </label>
                  </div>
                  <label className='type-text'>R$ {item.preco.toFixed(2)}</label>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <Title>Observações</Title>
        <div className='container'>
          <textarea
            placeholder='Inclua suas observações'
            className='notes'
            name='notes'
            id='notes'
            value={order?.notes || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='container'>
        <button disabled={!order.tipo} onClick={handleAddToCart} className='btn-add'>
          Adicionar ao Carrinho
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .btn-close {
    position: absolute;
    right: 0.2rem;
    top: -0.8rem;
    font-size: 2.4rem;
    background-color: transparent;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }

  .name {
    text-transform: capitalize;
  }

  .description {
    font-size: 1.8rem;
    padding-top: 0.5rem;
  }

  .type-itens {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
    text-transform: capitalize;
  }

  .type-text {
    font-size: 1.8rem;
  }

  .type-input {
    margin-right: 1rem;
    accent-color: ${Styles.Colors.colorPrimary};
    cursor: pointer;
    
  }

  .container {
    padding: 1rem 0;
  }

  .notes {
    border-width: 0.1rem;
    border-radius: 0.5rem;
    width: 100%;
    height: 12rem;
    resize: none;
    font-size: 1.6rem;
    padding: 1rem;
    transition: border 0.3s ease;
    margin-top: 1rem;
  }

  .notes:focus {
    outline: 2px solid ${Styles.Colors.colorGrayDark};
    border: none;
  }

  .btn-add {
    width: 100%;
    background-color: ${Styles.Colors.colorPrimary};
    color: ${Styles.Colors.colorWhite};
    font-size: 1.6rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .btn-add:disabled {
    background-color: ${Styles.Colors.colorPrimaryLight};
    cursor: not-allowed;
  }
`;

export default Order;
