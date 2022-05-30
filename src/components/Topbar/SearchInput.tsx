import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { setTerm } from './../../services/slices/filterListSlice';

interface IProps {
  toggleInput: () => void;
  showInput: boolean;
}

const SearchInput: React.FC<IProps> = ({ toggleInput, showInput }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper showInput={showInput}>
      <input
        onChange={(e) => dispatch(setTerm(e.target.value))}
        className='input'
        type='text'
        placeholder='O que deseja pedir?'
      />
      <button className='btn-close' onClick={toggleInput}>
        <IoClose size={20} />
      </button>
    </Wrapper>
  );
};

interface IStyle {
  showInput: boolean;
}

const Wrapper = styled.div<IStyle>`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${Styles.Colors.colorWhite};
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.showInput ? 0 : '-100%')};
  transition: all 0.3s ease;

  .input {
    height: 5rem;
    border: none;
    font-size: 2rem;
    padding: 0 1rem;
    flex: 1;
  }

  .input:focus {
    outline: none;
  }

  .btn-close {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 1rem 1rem;
  }
`;

export default SearchInput;
