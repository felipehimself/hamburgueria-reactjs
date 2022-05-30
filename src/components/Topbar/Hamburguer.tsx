import styled from 'styled-components';
import { Styles } from '../../constants/styles';

const Hamburger = () => {

  return (
    <Wrapper>
      <button className='hamburger'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hamburger {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(0.8rem) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-0.8rem) rotate(-45deg);
  }
  .bar {
    display: block;
    width: 2.4rem;
    // width: 2.8rem;
    height: 0.3rem;
    margin: 0.5rem auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease;
    background-color: ${Styles.Colors.colorWhite};
  }
`;
export default Hamburger;