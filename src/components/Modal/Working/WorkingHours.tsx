import Badge from '../../../shared/Badge';
import {
  FaMotorcycle,
  FaShoppingBag,
  FaUtensils,
  FaRegCreditCard,
  FaRegMoneyBillAlt,
} from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { setModalWorking } from '../../../services/slices/modalWorkingSlice';

import * as Style from './styles';

const WorkingHours: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Style.Article>
      <Style.BtnClose
        onClick={() => dispatch(setModalWorking(false))}
        className='btn-close'
      >
        &times;
      </Style.BtnClose>
      <Style.Div>
        <Style.H2>Horários de Funcionamento</Style.H2>
        <Style.Table>
          <Style.Tbody>
            <Style.Tr>
              <Style.Td>DOM</Style.Td>
              <Style.Td>18:00 às 00:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>SEG</Style.Td>
              <Style.Td>17:00 às 22:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>TER</Style.Td>
              <Style.Td>18:00 às 23:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>QUA</Style.Td>
              <Style.Td>18:00 às 23:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>QUI</Style.Td>
              <Style.Td>18:00 às 23:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>SEX</Style.Td>
              <Style.Td>18:00 às 23:00</Style.Td>
            </Style.Tr>
            <Style.Tr>
              <Style.Td>SAB</Style.Td>
              <Style.Td>18:00 às 00:00</Style.Td>
            </Style.Tr>
          </Style.Tbody>
        </Style.Table>
      </Style.Div>
      <Style.Div>
        <Style.H2>Opções de entrega</Style.H2>
        <Style.Container className='badge-container'>
          <Badge>
            <FaMotorcycle />
            <Style.Span>Delivery</Style.Span>
          </Badge>
          <Badge>
            <FaShoppingBag />
            <Style.Span>Retirada</Style.Span>
          </Badge>
          <Badge>
            <FaUtensils />
            <Style.Span>Local</Style.Span>
          </Badge>
        </Style.Container>
      </Style.Div>
      <Style.Div>
        <Style.H2>Meios de pagamento</Style.H2>
        <Style.Container className='badge-container'>
          <Badge>
            <FaRegCreditCard />
            <Style.Span>Cartão</Style.Span>
          </Badge>
          <Badge>
            <FaRegMoneyBillAlt />
            <Style.Span>Dinheiro</Style.Span>
          </Badge>
        </Style.Container>
      </Style.Div>
    </Style.Article>
  );
};

export default WorkingHours;
