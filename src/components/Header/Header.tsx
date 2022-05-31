import { useState, useEffect } from 'react';
import logo from './../../assets/logo.png';
import { FaWhatsapp, FaClock } from 'react-icons/fa';

import { setModalWorking } from '../../services/slices/modalWorkingSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';

import { isPlaceOpen } from '../../utils/data';

import Modal from '../Modal/Modal';
import WorkingHours from '../Modal/Working/WorkingHours';

import * as Style from './styles';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const { isModalOpen } = useSelector((state: RootState) => state.modalWorking);

  const dispatch = useDispatch();

  useEffect(() => {
    setisOpen(isPlaceOpen());
  }, []);

  return (
    <>
      <Modal show={isModalOpen}>
        <WorkingHours />
      </Modal>
      <Style.Header>
        <Style.HeaderContainer>
          <Style.ImgLogo src={logo} alt='company logo' />
          <Style.TimeContainer>
            <FaClock />
            <Style.BtnShowMore onClick={() => dispatch(setModalWorking(true))}>
              50 a 75min ● Ver Mais
            </Style.BtnShowMore>
          </Style.TimeContainer>
        </Style.HeaderContainer>
        <Style.IsOpenContainer className={isOpen ? 'open' : undefined}>
          <FaWhatsapp />
          <Style.BtnOpenModal onClick={() => dispatch(setModalWorking(true))}>
            {isOpen ? 'Aberto agora' : 'Fechado para pedidos'}
          </Style.BtnOpenModal>
        </Style.IsOpenContainer>
      </Style.Header>
    </>
  );
};

export default Header;
