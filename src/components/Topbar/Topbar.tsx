import { useState } from 'react';
import { Styles } from '../../constants/styles';
import SearchInput from './Input/SearchInput';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

import * as Style from './styles';

const Topbar = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <Style.TopBar>
      {pathname === '/' && (
        <SearchInput showInput={showInput} toggleInput={toggleInput} />
      )}
      <Style.Container>
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
      </Style.Container>
    </Style.TopBar>
  );
};

export default Topbar;
