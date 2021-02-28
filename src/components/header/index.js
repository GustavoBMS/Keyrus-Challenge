import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {MainHeader} from './styles';
import Logo from '../../assets/logo.png';
import {FiShoppingCart} from 'react-icons/fi';
import MyContext from '../../context';

const Header = () => {
  const { addToCart } = useContext(MyContext);

  return (
      <MainHeader>
        <nav>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
          <h1>Keyrus Challenge</h1>
          <div>
            <span><FiShoppingCart size={25} /> {addToCart}</span>
          </div>
        </nav>
      </MainHeader>
  )
}

export default Header;