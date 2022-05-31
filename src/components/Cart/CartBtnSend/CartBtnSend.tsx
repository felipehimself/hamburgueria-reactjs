import { FaTelegramPlane } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store/store';
import axios from 'axios';
import * as Style from './styles';

const CartBtnSend = () => {
  const { data } = useSelector((state: RootState) => state.ordersData);

  const key = import.meta.env.VITE_KEY;
  const chatId = import.meta.env.VITE_CHAT_ID;

  const handleSendMessage = async () => {
    const url = `https://api.telegram.org/bot${key}/sendMessage`;
    const params = { chat_id: chatId, text: JSON.stringify(data) };
    const res = await axios.get(url, { params: params });
    console.log(res);
  };

  return (
    <Style.BtnContainer>
      <Style.Btn onClick={handleSendMessage} className='btn-send'>
        ENVIAR
        <FaTelegramPlane />
      </Style.Btn>
    </Style.BtnContainer>
  );
};

export default CartBtnSend;
