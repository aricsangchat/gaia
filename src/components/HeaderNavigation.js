import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
  return (
    <nav className='navigation navigation--mobile-hidden'>
      <ul className='menu'>
        <li className='menu__item'><NavLink exact to='/' className='menu__item--link' activeClassName='menu__item--active'>My Gaia</NavLink></li>
        <li className='menu__item'><NavLink to='/seeking-truth/metaphysics' className='menu__item--link' activeClassName='menu__item--active'>Metaphysics</NavLink></li>
      </ul>
      <form className='nav__searchform'>
        <div className='nav__searchform--input'>
          <input type='text' className='form__input' placeholder='Search' />
        </div>
        <div className='nav__searchform--submit'>
          <button type='submit' className='btn btn--default'>Submit</button>
        </div>
      </form>
  </nav>
  );
};

export default HeaderNavigation;
