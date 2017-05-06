import React from 'react';

const HeaderTop = () => {
  return (
    <div className='header__top'>
      <div className="hamburger header__hamburger">
        <span className="hamburger__top"></span>
        <span className="hamburger__middle"></span>
        <span className="hamburger__bottom"></span>
      </div>
      <div className='header__branding'>
        <h2>Gaia</h2>
      </div>
      <div className='header__actions'>
        <div className='user-menu'>
          <div className='user-menu__username'>
            <p>Aric Sangchat</p>
          </div>
          <div className='user-menu__avatar'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
