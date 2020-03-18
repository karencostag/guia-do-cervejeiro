import React from "react";
import "./style.css";
import facebook from "../Img/Facebook.png";
import instagram from "../Img/Instagram.png";
import twitter from "../Img/Twitter.png";

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">&copy; Todos direitos reservados FrontStars</p>
    <p className="footer-small">
      Este projeto utiliza os dados providos pela PunkAPI
    </p>
    <div className="image-content">
      <a href="https://www.facebook.com/" target="_blanck"><img className="logo" src={facebook} alt="logo facebook" /></a>
      <a href="https://www.instagram.com/?hl=pt-br"><img className="logo" src={instagram} alt="logo instagram" /></a>
      <a href="https://twitter.com/login?lang=pt"><img className="logo" src={twitter} alt="logo twitter" /></a>
    </div>
  </footer>
);

export default Footer;
