import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import AccordionCard from './AccordionCard';
import OrderOptions from '../Modal/Order/OrderOptions';

import Modal from '../Modal/Modal';

import * as Style from './styles';

const AccordionContainer = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const { orderData } = useSelector((state: RootState) => state.modalOrder);
  const { term } = useSelector((state: RootState) => state.term);

  return (
    <>
      <Modal show={orderData.isModalOpen}>
        <OrderOptions {...orderData} />
      </Modal>
      <Style.AccordionContainer>
        <Accordion
          allowMultipleExpanded={true}
          preExpanded={data.map((i) => i.id)}
        >
          {data
            .filter((item) => item.categoria.includes(term))
            .map((item) => {
              const { categoria, id, opcoes } = item;
              return (
                <AccordionItem
                  id={categoria.replace(/ /g, '')}
                  uuid={id}
                  key={item.categoria}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        fontSize: '1.6rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                      }}
                    >
                      {categoria}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Style.AccordionItemContainer >
                      {opcoes.map((opcao) => (
                        <AccordionCard key={opcao.nome} {...opcao} />
                      ))}
                    </Style.AccordionItemContainer>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
        {data.filter((item) => item.categoria.includes(term)).length < 1 && (
          <Style.H2 >Nenhum item encontrado!</Style.H2>
        )}
      </Style.AccordionContainer>
    </>
  );
};

export default AccordionContainer;
