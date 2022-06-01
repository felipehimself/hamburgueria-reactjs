import styled from 'styled-components';
import { Styles } from '../../../constants/styles';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 0.2rem;
  top: -0.8rem;
  font-size: 2.4rem;
  background-color: transparent;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;

export const Div = styled.div``;

interface IStyle {
  transform?: string;
}
export const H2 = styled.h2<IStyle>`
  font-size: 2rem;
  color: ${Styles.Colors.colorPrimary};
  border-bottom: 2px solid ${Styles.Colors.colorPrimary};
  padding-bottom: 0.5rem;
  text-transform: ${(props) => props.transform || undefined};
`;

export const ItensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0;
  text-transform: capitalize;
`;

export const P = styled.p`
  font-size: 1.8rem;
  padding-top: 0.5rem;
`;

export const Input = styled.input`
  margin-right: 1rem;
  accent-color: ${Styles.Colors.colorPrimary};
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const Container = styled.div`
  padding: 1rem 0;
`;

export const TextArea = styled.textarea`
  border-width: 0.1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 12rem;
  resize: none;
  font-size: 1.6rem;
  padding: 1rem;
  transition: border 0.3s ease;
  margin-top: 1rem;

  :focus {
    outline: 2px solid ${Styles.Colors.colorGrayDark};
    border: none;
  }
`;

export const BtnAdd = styled.button`
  width: 100%;
  background-color: ${Styles.Colors.colorPrimary};
  color: ${Styles.Colors.colorWhite};
  font-size: 1.6rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  :disabled {
    background-color: ${Styles.Colors.colorPrimaryLight};
    cursor: not-allowed;
  }
`;
