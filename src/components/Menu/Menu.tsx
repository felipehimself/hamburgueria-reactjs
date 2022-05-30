import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import { Container } from '../../shared/Container';
import { Link } from 'react-scroll';

import data from '../../utils/data';

const itemsMenu = [...new Set(data.map((item) => item.categoria))];

const Menu = () => {
  return (
    <Wrapper>
      <Container>
        <div className='menu-itens__container'>
          {itemsMenu.map((item, index) => {
            return (
              <Link
                activeClass='active'
                to={item.replace(/ /g,'')}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={index}
                className='link'
              >
                {item}
              </Link>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: ${Styles.Colors.colorWhite};
  position: sticky;
  top: 0;
  z-index: 100;

  .menu-itens__container {
    overflow: auto;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }

  .menu-itens__container::-webkit-scrollbar {
    height: 0.8rem;
  }
  .menu-itens__container::-webkit-scrollbar-track {
    background: #ccc;
    border-radius: 50px;
  }

  .menu-itens__container .link {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 1.6rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${Styles.Colors.colorGrayDark};
    text-transform: capitalize;
    width: 100%;
    cursor: pointer;
  }

  .active {
    border-bottom: 0.5rem solid ${Styles.Colors.colorPrimary};
  }
`;

export default Menu;
