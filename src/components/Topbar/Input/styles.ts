import styled from 'styled-components';
import { Styles } from '../../../constants/styles';

interface IStyle {
  showInput: boolean;
}

export const Container = styled.div<IStyle>`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${Styles.Colors.colorWhite};
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.showInput ? 0 : '-100%')};
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  height: 5rem;
  border: none;
  font-size: 2rem;
  padding: 0 1rem;
  flex: 1;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 1rem 1rem;
`;
