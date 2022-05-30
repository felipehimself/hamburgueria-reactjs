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
import styled from 'styled-components';
import { Container } from '../../shared/Container';
import OrderOptions from '../Modal/Order/OrderOptions';

import Modal from '../Modal/Modal';
import { Styles } from '../../constants/styles';

const AccordionContainer = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const { orderData } = useSelector((state: RootState) => state.modalOrder);
  const { term } = useSelector((state: RootState) => state.term);

  return (
    <>
      <Modal show={orderData.isModalOpen}>
        <OrderOptions {...orderData} />
      </Modal>
      <Wrapper>
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
                    <div className='item-container'>
                      {opcoes.map((opcao) => (
                        <AccordionCard key={opcao.nome} {...opcao} />
                      ))}
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
        {data.filter((item) => item.categoria.includes(term)).length < 1 && (
          <p className='no-data-msg'>Nenhum item encontrado!
          </p>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  padding: 2rem 1rem;
  margin-bottom: 20rem;

  .item-container {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1000px) {
    .item-container {
      grid-template-columns: 1fr;
    }
  }

  .no-data-msg {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: ${Styles.Colors.colorGrayDark};
  }
`;
export default AccordionContainer;
