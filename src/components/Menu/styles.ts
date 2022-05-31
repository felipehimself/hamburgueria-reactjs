import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  background-color: ${Styles.Colors.colorWhite};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Itens = styled.div`
  overflow: auto;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;

  ::-webkit-scrollbar {
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: #ccc;
    border-radius: 50px;
  }
`;

export const NavLink = styled(Link).attrs((props) => ({
  className: props.className,
}))`

  &.active {
    border-bottom: 0.5rem solid ${Styles.Colors.colorPrimary};
  }

  display: inline-block;
  color: white;
  text-align: center;
  padding: 1.6rem;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${Styles.Colors.colorGrayDark};
  text-transform: capitalize;
  width: 100%;
  cursor: pointer;
`;
