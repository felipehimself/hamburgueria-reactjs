import { Section } from './style';

interface IProps {
  show: boolean;
  children: React.ReactNode;
}

const Content: React.FC<IProps> = ({ show, children }) => {
  return <Section show={show}>{children}</Section>;
};

export default Content;
