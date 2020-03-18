import React from "react";
import "./style.css";
import logo from "../Img/pbeers.PNG";
import side from "../Img/side.PNG";

const Header = () => (
  <header className="header">
    <div className="all">
      <img className="side" src={side} alt="logo-1" />
      <img className="logo" src={logo} alt="logo-2" />
    </div>
  </header>
);

export default Header;
