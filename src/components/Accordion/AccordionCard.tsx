import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { IOptions } from '../../interfaces/dataInterfaces';
import { useDispatch } from 'react-redux';
import { setModalOrder } from '../../services/slices/modalOrderSlice';

const AccordionCard: React.FC<IOptions> = ({ nome, descricao, img, itens }) => {
  const precos = itens
    ?.map((item) => item.preco)
    .sort((a, b) => (a > b ? b : a));

  const dispatch = useDispatch();

  return (
    <Card
      onClick={() =>
        dispatch(
          setModalOrder({
            nome: nome,
            descricao: descricao,
            img: img,
            itens: itens,
            isModalOpen: true,
          })
        )
      }
    >
      <div className='details-container'>
        <h3 className='details-name details-text'>{nome}</h3>
        <p className='details-text'>{descricao}</p>
        <p className='details-text'>
          {precos!?.length > 1
            ? `R$ ${precos?.[0].toFixed(2)} a R$${precos?.[
                precos.length - 1
              ].toFixed(2)}`
            : `R$ ${precos?.[0].toFixed(2)}`}
        </p>
      </div>
      <div className='container'>
        <div className='img-container'>
          <img className='img' src={img} alt={nome} />
        </div>
      </div>
    </Card>
  );
};

const Card = styled.article`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  cursor: pointer;
  gap: 2rem;

  .details-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.8rem;
    flex: 1;
  }

  .details-text {
    font-size: 1.6rem;
  }
  .details-name {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${Styles.Colors.colorGrayDark};
  }

  .img-container {
    width: 8rem;
    height: 8rem;
    overflow: hidden;
    border-radius: 5px;
  }
  .img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
export default AccordionCard;
