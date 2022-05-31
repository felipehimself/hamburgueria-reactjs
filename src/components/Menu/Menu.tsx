import { Container } from '../../shared/Container';
import * as Style from './styles';

import data from '../../utils/data';

const itemsMenu = [...new Set(data.map((item) => item.categoria))];

const Menu = () => {
  return (
    <Style.Nav>
      <Container>
        <Style.Itens>
          {itemsMenu.map((item, index) => {
            return (
              <Style.NavLink
                activeClass='active'
                to={item.replace(/ /g, '')}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={index}
                className='link'
              >
                {item}
              </Style.NavLink>
            );
          })}
        </Style.Itens>
      </Container>
    </Style.Nav>
  );
};

export default Menu;
