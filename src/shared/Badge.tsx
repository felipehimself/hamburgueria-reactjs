import styled from 'styled-components';
import { Styles } from '../constants/styles';

interface IProps {
  children: React.ReactNode;
}

const Badge: React.FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
     {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc;
  padding: 0.5rem 5px;
  border-radius: 2px;
  color: ${Styles.Colors.colorGrayDark};
  font-size: 1.2rem;
  gap: 5px;
  min-width: 7rem;
`;
export default Badge;
