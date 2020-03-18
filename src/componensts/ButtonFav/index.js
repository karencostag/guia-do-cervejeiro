import React from "react";
import "./style.css";

const ButtonFav = ({ className, onClick, src }) => (
  <div className={`click ${className}`} onClick={onClick}>
    <img className="imagem" src={src} alt="favoritos" />
  </div>
);

export default ButtonFav;
