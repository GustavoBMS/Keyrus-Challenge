import React from 'react';
import {Link} from 'react-router-dom';

import {MainHeader} from './styles';
import Logo from '../../assets/logo.png';
import {FiShoppingCart} from 'react-icons/fi';

const Header = () => {

  return (
      <MainHeader>
        <nav>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
          <div>
            <span ><FiShoppingCart size={25} /></span>
          </div>
        </nav>
      </MainHeader>
  )
}

export default Header;