
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setTerm } from '../../../services/slices/filterListSlice';
import * as Style from './styles';

interface IProps {
  toggleInput: () => void;
  showInput: boolean;
}

const SearchInput: React.FC<IProps> = ({ toggleInput, showInput }) => {
  const dispatch = useDispatch();

  return (
    <Style.Container showInput={showInput}>
      <Style.Input
        onChange={(e) => dispatch(setTerm(e.target.value))}
        className='input'
        type='text'
        placeholder='O que deseja pedir?'
      />
      <Style.Button className='btn-close' onClick={toggleInput}>
        <IoClose size={20} />
      </Style.Button>
    </Style.Container>
  );
};

export default SearchInput;
