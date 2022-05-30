import styled from 'styled-components';

import Content from './Content';

interface IProps {
  show: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ show, children }) => {
  return (
    <Wrapper show={show}>
      <Content show={show}>{children}</Content>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div<IProps>`
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
