import styled from 'styled-components';
import { Styles } from '../../../constants/styles';
import Badge from '../../../shared/Badge';
import {
  FaMotorcycle,
  FaShoppingBag,
  FaUtensils,
  FaRegCreditCard,
  FaRegMoneyBillAlt,
} from 'react-icons/fa';
import Title from '../Title';

import { useDispatch } from 'react-redux';
import { setModalWorking } from '../../../services/slices/modalWorkingSlice';

const WorkingHours: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button
        onClick={() => dispatch(setModalWorking(false))}
        className='btn-close'
      >
        &times;
      </button>
      <div>
        <Title>Horários de Funcionamento</Title>
        <table>
          <tbody>
            <tr>
              <td>DOM</td>
              <td>18:00 às 00:00</td>
            </tr>
            <tr>
              <td>SEG</td>
              <td>17:00 às 22:00</td>
            </tr>
            <tr>
              <td>TER</td>
              <td>18:00 às 23:00</td>
            </tr>
            <tr>
              <td>QUA</td>
              <td>18:00 às 23:00</td>
            </tr>
            <tr>
              <td>QUI</td>
              <td>18:00 às 23:00</td>
            </tr>
            <tr>
              <td>SEX</td>
              <td>18:00 às 23:00</td>
            </tr>
            <tr>
              <td>SAB</td>
              <td>18:00 às 00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Title>Opções de entrega</Title>
        <div className='badge-container'>
          <Badge>
            <FaMotorcycle />
            <span>Delivery</span>
          </Badge>
          <Badge>
            <FaShoppingBag />
            <span>Retirada</span>
          </Badge>
          <Badge>
            <FaUtensils />
            <span>Local</span>
          </Badge>
        </div>
      </div>
      <div>
        <Title>Meios de pagamento</Title>
        <div className='badge-container'>
          <Badge>
            <FaRegCreditCard />
            <span>Cartão</span>
          </Badge>
          <Badge>
            <FaRegMoneyBillAlt />
            <span>Dinheiro</span>
          </Badge>
        </div>
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

  td {
    font-size: 1.8rem;
    padding-bottom: 0.5rem;
  }

  tr td:first-child {
    color: ${Styles.Colors.colorGrayDark};
    font-weight: bold;
    padding-right: 1rem;
  }

  .badge-container {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;
export default WorkingHours;
