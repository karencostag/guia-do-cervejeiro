import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Card extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    this.getBeer();
  }
  getBeer = async () => {
    const id = this.props.match.params.id;
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

    this.setState({ beer: response.data });
  };
  render() {
    const { beer } = this.state;

    return (
      <div className="center">
        {beer.map(el => (
          <div className="card-description" key={el.id}>
            
             <Link to={"/"}>
                <button className="button-return">Voltar</button>
            </Link>

            <h1 className="beer-name">{el.name}</h1>
            <div className="card-beer">
              <img className="beer-image" src={el.image_url} alt={el.name} />
              <div className="aside-beer">
                <p className="beer-description">Decription: {el.description}</p>
                <p className="beer-description">
                  First Brewed: {el.first_brewed}
                </p>
                <p className="beer-description">
                  Brewers Tips: {el.brewers_tips}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
