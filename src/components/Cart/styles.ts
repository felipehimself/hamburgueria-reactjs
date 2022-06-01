import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
  background-color: ${Styles.Colors.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
`;

export const H4 = styled.h4`
  text-align: center;
  font-size: 2.2rem;
  color: ${Styles.Colors.colorGray};
  font-weight: 600;
`;

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1.4rem;
`;

export const ItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
`;

export const P = styled.p.attrs((props) => ({
  className: props.className,
}))`
  &.flex {
    width: 14rem;
  }

  color: ${Styles.Colors.colorGray};
  font-size: 1.8rem;
  text-transform: capitalize;
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 2.2rem;
  text-align: center;
  text-decoration: none;
  color: ${Styles.Colors.colorBlue};
  transition: all 0.3s ease;

  :hover {
    text-decoration: underline solid ${Styles.Colors.colorBlue};
  }
`;
