import { Styles } from '../../constants/styles';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Title: React.FC<IProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h2`
  font-size: 2rem;
  color: ${Styles.Colors.colorPrimary};
  border-bottom: 2px solid ${Styles.Colors.colorPrimary};
  padding-bottom: 0.5rem;
`;

export default Title;
