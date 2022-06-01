import styled from 'styled-components';
import { Styles } from '../../../constants/styles';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 0.2rem;
  top: -0.8rem;
  font-size: 2.4rem;
  background-color: transparent;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;

export const Div = styled.div``;

export const Table = styled.table``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  font-size: 1.8rem;
  padding-bottom: 0.5rem;

  :first-child {
    color: ${Styles.Colors.colorGrayDark};
    font-weight: bold;
    padding-right: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  color: ${Styles.Colors.colorPrimary};
  border-bottom: 2px solid ${Styles.Colors.colorPrimary};
  padding-bottom: 0.5rem;
`;
export const Span = styled.span``;
