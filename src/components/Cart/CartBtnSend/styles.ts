import { Styles } from '../../../constants/styles';
import styled from 'styled-components';

export const BtnContainer = styled.div`
  margin: 1rem auto;
  max-width: 60rem;
`;

export const Btn = styled.button`
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
`;
