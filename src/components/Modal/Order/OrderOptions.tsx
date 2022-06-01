import { useState } from 'react';
import {
  IOrder,
  setModalOrder,
} from '../../../services/slices/modalOrderSlice';
import { useDispatch } from 'react-redux';
import { setOrderData } from '../../../services/slices/ordersSlice';

import * as Style from './styles';

const Order: React.FC<IOrder> = ({ nome, descricao, img, itens }) => {
  const [order, setOrder] = useState({ notes: '', tipo: '' });

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
    if (!order.tipo) return;

    const [tipo, preco, id] = order.tipo.split('|');

    dispatch(
      setOrderData({
        notes: order.notes,
        tipo: tipo,
        id: Number(id),
        preco: Number(preco),
        img: img,
        nome: nome,
      })
    );
    handleCleanModalOrder();
  };

  return (
    <Style.Article>
      <Style.BtnClose aria-label='fechar' onClick={handleCleanModalOrder}>
        &times;
      </Style.BtnClose>
      <Style.Div>
        <Style.H2 transform='capitalize'>{nome}</Style.H2>
        <Style.P>{descricao}</Style.P>
      </Style.Div>
      {itens!?.length > 0 && (
        <Style.Div>
          <Style.H2>Selecione um tipo</Style.H2>
          <Style.Div>
            {itens?.map((item) => {
              return (
                <Style.ItensContainer key={item.id}>
                  <Style.Div>
                    <Style.Input
                      onClick={handleChange}
                      value={`${item.tipo}|${item.preco}|${item.id}`}
                      type='radio'
                      name='tipo'
                      id={item.tipo}
                    />
                    <Style.Label htmlFor={item.tipo}>{item.tipo}</Style.Label>
                  </Style.Div>
                  <Style.Label>R$ {item.preco.toFixed(2)}</Style.Label>
                </Style.ItensContainer>
              );
            })}
          </Style.Div>
        </Style.Div>
      )}

      <Style.Div>
        <Style.H2>Observações</Style.H2>
        <Style.Container>
          <Style.TextArea
            placeholder='Inclua suas observações'
            className='notes'
            name='notes'
            id='notes'
            value={order?.notes || ''}
            onChange={handleChange}
          />
        </Style.Container>
      </Style.Div>

      <Style.Container>
        <Style.BtnAdd
          disabled={!order.tipo}
          onClick={handleAddToCart}
          className='btn-add'
        >
          Adicionar ao Carrinho
        </Style.BtnAdd>
      </Style.Container>
    </Style.Article>
  );
};

export default Order;
