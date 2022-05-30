import styled from 'styled-components';
import { Styles } from '../../constants/styles';

interface IProps {
  show: boolean;
  children: React.ReactNode;
}

const Content: React.FC<IProps> = ({ show, children }) => {
  return <Wrapper show={show}>{children}</Wrapper>;
};

const Wrapper = styled.div<IProps>`
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
export default Content;
