import styled from 'styled-components';
import { Styles } from '../../constants/styles';

export const TopBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${Styles.Colors.colorPrimary};
  height: 5rem;
  padding: 0 0 0 2rem;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
`;
