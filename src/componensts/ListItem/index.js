import React from "react";
import "./style.css";

const ListItem = props => (
  <li className="card_content" key={props.id}>
    <h2 className="card_title">{props.name}</h2>
    <div className="card_image">
      <img className="img" src={props.img} alt="image_api" />
    </div>
    <p className="card_text">{props.description}</p>
    <button className="button-see-more">Ver mais</button>
  </li>
);

export default ListItem;
