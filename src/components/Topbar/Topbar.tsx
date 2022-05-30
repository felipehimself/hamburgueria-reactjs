import { useState } from 'react';
import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import SearchInput from './SearchInput';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <Top>
      {pathname === '/' && (
        <SearchInput showInput={showInput} toggleInput={toggleInput} />
      )}
      <div className='icons-container'>
        {pathname.includes('cart') ? (
          <FaArrowLeft
            color={Styles.Colors.colorWhite}
            style={{ cursor: 'pointer' }}
            size={18}
            onClick={() => navigate('/')}
          />
        ) : (
          <FaSearch
            onClick={toggleInput}
            color={Styles.Colors.colorWhite}
            style={{ cursor: 'pointer' }}
            size={18}
          />
        )}
      </div>
    </Top>
  );
};

const Top = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${Styles.Colors.colorPrimary};
  height: 5rem;
  padding: 0 0 0 2rem;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;

  .icons-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* margin-right: 2rem; */
    padding: 0 1rem;
  }
`;
export default Topbar;
