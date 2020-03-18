import React from "react";
import "./style.css";
const Button = ({ className = "", onClick, name }) => (
  <li>
    <button className={`buttons-from-filter ${className}`} onClick={onClick}>
      {name}
    </button>
  </li>
);

export default Button;
