import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { Container } from '../../shared/Container';

export const AccordionContainer = styled(Container)`
  padding: 2rem 1rem;
  margin-bottom: 20rem;
`;

export const AccordionItemContainer = styled.section`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${Styles.Colors.colorGrayDark};
`;

export const Article = styled.article`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  gap: 2rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.8rem;
  flex: 1;
`;

export const H3 = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${Styles.Colors.colorGrayDark};
`;

export const P = styled.p`
  font-size: 1.6rem;
`;

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 5px;
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
