import React from 'react';
import logo from '../assets/logo/Logo-brainflix.svg'
import UserPic from '../assets/images/Mohan-muruge.jpg'
import './Header.scss'
function Header() {
  return (
    <header className="header" >
      <div className="header__logo">
        <img src={logo} alt="logo header" />
      </div>
      <div className="header__search">
        <input className="search" placeholder="Search" />
        <button className="search--button" onClick>+ UPLOAD</button>
        <img className="search--image" src={UserPic} alt="User Pic" style={{ width: '60px', borderRadius: '50%', height: '50px' }} />
      </div>
    </header>
  )
}
export default Header;