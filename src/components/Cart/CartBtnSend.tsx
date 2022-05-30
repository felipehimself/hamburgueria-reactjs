import styled from 'styled-components';
import { FaTelegramPlane } from 'react-icons/fa';
import { Styles } from '../../constants/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import axios from 'axios';

const CartBtnSend = () => {
  const { data } = useSelector((state: RootState) => state.ordersData);
  
  const key = import.meta.env.VITE_KEY
  const chatId = import.meta.env.VITE_CHAT_ID;

  const handleSendMessage = async () => {
    const url = `https://api.telegram.org/bot${key}/sendMessage`;
    const params = { chat_id: chatId, text: JSON.stringify(data) }
    const res = await axios.get(url, { params: params });
    console.log(res)
  };

  return (
    <Wrapper>
      <button onClick={handleSendMessage} className='btn-send'>
        ENVIAR
        <FaTelegramPlane />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem auto;
  max-width: 60rem;

  .btn-send {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.8rem;
    width: 100%;
    padding: 1rem 1rem;
    height: 5.2rem;
    margin: 1rem 0;
    background-color: ${Styles.Colors.colorOrange};
    border: none;
    color: ${Styles.Colors.colorWhite};
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
export default CartBtnSend;
