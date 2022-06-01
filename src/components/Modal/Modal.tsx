import Content from './Content';
import { Overlay } from './style';

interface IProps {
  show: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ show, children }) => {
  return (
    <Overlay show={show}>
      <Content show={show}>{children}</Content>
    </Overlay>
  );
};

export default Modal;
