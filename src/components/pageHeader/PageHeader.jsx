import React from "react";
import logo from "../../assets/logo/Logo-brainflix.svg";
import UserPic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import "./PageHeader.scss";

function PageHeader() {
  return (
    <header className="header">
      <Link to="/home">
        <div className="header--logo">
          <img src={logo} alt="logo graphic" />
        </div>
      </Link>
      <div className="header__search">
        <input className="header__search--input" placeholder="Search" />
        <Link to="/upload" className="text-decoration-none">
          <button className="header__search--button">+ UPLOAD</button>
        </Link>

        <img className="header__search--image" src={UserPic} alt="User Pic" />
      </div>
    </header>
  );
}
export default PageHeader;
