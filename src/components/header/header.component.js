import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Logo  from "../../assets/original.svg";

function Header() {
  return (
    <div className="header"> 
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
      </div>
    </div>
  );
}
export default Header;
