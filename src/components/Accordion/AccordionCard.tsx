import { IOptions } from '../../interfaces/dataInterfaces';
import { useDispatch } from 'react-redux';
import { setModalOrder } from '../../services/slices/modalOrderSlice';

import * as Style from './styles';

const AccordionCard: React.FC<IOptions> = ({ nome, descricao, img, itens }) => {


  const precos = itens
    ?.map((item) => item.preco)
    .sort((a, b) => (a > b ? b : a));

  const dispatch = useDispatch();

  return (
    <Style.Article
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
      <Style.DetailsContainer>
        <Style.H3>{nome}</Style.H3>
        <Style.P>{descricao}</Style.P>
        <Style.P>
          {precos!?.length > 1
            ? `R$ ${precos?.[0].toFixed(2)} a R$${precos?.[
                precos.length - 1
              ].toFixed(2)}`
            : `R$ ${precos?.[0].toFixed(2)}`}
        </Style.P>
      </Style.DetailsContainer>
      <Style.ImgContainer>
        <Style.Img src={img} alt={nome} />
      </Style.ImgContainer>
    </Style.Article>
  );
};

export default AccordionCard;
