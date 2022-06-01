import styled from 'styled-components';
import { Styles } from '../../constants/styles';

interface IStyle {
  show: boolean;
}
export const Section = styled.section<IStyle>`
  position: absolute;
  top: ${(props) => (props.show ? '50%' : '-100%')};
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.5s ease;
  max-width: 50rem;
  width: 100%;
  background-color: ${Styles.Colors.colorWhite};
  border-radius: 0.5rem;
  padding: 1.6rem;
`;

export const Overlay = styled.div<IStyle>`
  position: fixed;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  );
  inset: 0;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 1000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
