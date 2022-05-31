import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import homeBanner from './../../assets/header-background.jpg';


export const Header = styled.header`
  height: 380px;
  background-image: url(${homeBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 43rem;
  width: 100%;
`;

export const ImgLogo = styled.img`
  height: 10rem;
  border-radius: 0.2rem;
`;

export const TimeContainer = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: ${Styles.Colors.colorWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BtnShowMore = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
`;

export const IsOpenContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.open > * {
    color: ${Styles.Colors.colorGreen};
  }

  background-color: ${Styles.Colors.colorWhite};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  color: ${Styles.Colors.colorPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BtnOpenModal = styled.button`
  background-color: transparent;
  border: none;
  color: ${Styles.Colors.colorPrimary};
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
`;
