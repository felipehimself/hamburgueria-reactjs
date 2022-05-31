import { Link } from 'react-router-dom';
import { Styles } from '../../../constants/styles';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translateX(-10px)}
  16% { transform: translateX(10px) }
  33% { transform: translateX(-10px)}
    50% { transform: translateX(10px)}
    66% { transform: translateX(-10px)}
    83% {transform: translateX(10px)}
    100% { transform: translateX(0px) }
`;

interface IStyle {
  show: boolean;
  animation: boolean;
}

export const BtnContainer = styled.div<IStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background-color: ${Styles.Colors.colorPrimary};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  visibility: ${(props) => (props.show ? 'visbile' : 'hidden')};
  animation-name: ${(props) => (props.animation ? shake : undefined)};
  animation-duration: 0.4s;
  animation-iteration-count: 2s;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1rem 0.5rem;
  color: ${Styles.Colors.colorWhite};
  text-decoration: none;
`;

export const Span = styled.span`
  background-color: ${Styles.Colors.colorOrange};
  width: 1.6rem;
  height: 1.6rem;
  margin-left: -1rem;
  margin-top: -1rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
