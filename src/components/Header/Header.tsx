import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import homeBanner from './../../assets/header-background.jpg';
import logo from './../../assets/logo.png';
import { FaWhatsapp, FaClock } from 'react-icons/fa';
import { setModalWorking } from '../../services/slices/modalWorkingSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';

import Modal from '../Modal/Modal';
import WorkingHours from '../Modal/Working/WorkingHours';

const Header = () => {
  const [isOpen, setisOpen] = useState(false)
  const { isModalOpen } = useSelector((state: RootState) => state.modalWorking);

  const dispatch = useDispatch();

  const isPlaceOpen = () => {
    const date = new Date()
    const dayOfTheWeek = date.getDay()
    const hour = date.getHours()

  if((dayOfTheWeek === 0 || dayOfTheWeek === 6) && (hour >= 18 && hour <= 24)  ){
    return true
  } 
  
  else if((dayOfTheWeek === 1) && (hour >= 17 && hour <= 22) ) {
    return true
  }
  
  else if((dayOfTheWeek >= 2 && dayOfTheWeek <= 5  ) && (hour >= 18 && hour <= 23) ){
    return true
  }
  
  return false
}

  useEffect(()=>{
    setisOpen(isPlaceOpen())
  },[])


  return (
    <>
      <Modal show={isModalOpen}>
        <WorkingHours />
      </Modal>
      <Wrapper >
        <div className='header-container' >
          <img src={logo} alt='company logo' className='logo' />
          <div className='time-container flex-container' >
            <FaClock />
            <span onClick={() => dispatch(setModalWorking(true))} className='time-btn'>
              50 a 75min ● Ver Mais
            </span>
          </div>
        </div>
        <div className={isOpen? 'open-container flex-container open' :'open-container flex-container'}>
          <FaWhatsapp />
          <span className='order-text' onClick={() => dispatch(setModalWorking(true))}>
            {isOpen ?  'Aberto agora' : 'Fechado para pedidos'}
          </span>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
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

  .flex-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .header-container {
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
  }

  .logo {
    height: 10rem;
    border-radius: 0.2rem;
  }

  .address-container {
    gap: 1rem;
    color: ${Styles.Colors.colorWhite};
  }

  .pin-container {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
  }

  .address {
    color: ${Styles.Colors.colorWhite};
    letter-spacing: 2px;
    font-size: 2rem;
    font-weight: bold;
  }

  .open-container {
    background-color: ${Styles.Colors.colorWhite};
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 2.2rem;
    color: ${Styles.Colors.colorPrimary};
    cursor: pointer;
  }

  .open-container.open > * {
    color: ${Styles.Colors.colorGreen}
  }

  .order-text {
    background-color: transparent;
    border: none;
    color: ${Styles.Colors.colorPrimary};
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
  }

  .time-container {
    margin-top: 1rem;
    font-size: 1.8rem;
    color: ${Styles.Colors.colorWhite};
    cursor: pointer;
  }
  .time-btn {
    background-color: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Header;
