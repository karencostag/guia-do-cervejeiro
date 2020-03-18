import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Button from "../Button/";

import ListItem from "../ListItem";

import { Link } from "react-router-dom";
class List extends Component {
  state = {
    allBeers: [],
    min: 0,
    max: 4.5,
    favorites: [],
    isFav: true
  };

  componentDidMount() {
    this.getBeers();
  }
  getBeers = async () => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers`);
    const allBeers = response.data;
    this.setState({ allBeers });
  };

  filterBeers(min, max) {
    this.setState({ min, max });
  }

  addFav = favorite => {
    const { favorites } = this.state;

    if (
      !favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)
    ) {
      this.setState({ favorites: [...favorites, favorite.id] });
      console.log("favoritar", favorites);
    }
  };

  render() {
    const { allBeers = [], min, max } = this.state;
    const filterBeers = allBeers.filter(
      beers => beers.abv >= min && beers.abv <= max
    );

    return (
      <div>
        <ul className="button-filter">
          <h4 className="name-filter">Filtrar por abv</h4>
          <Button
            className={0 >= min && 4.5 <= max ? "active-item" : ""}
            name="0% - 4.5% "
            onClick={() => this.filterBeers(0, 4.5)}
          />
          <Button
            className={4.6 >= min && 7.5 <= max ? "active-item" : ""}
            name="4.6% - 7.5% "
            onClick={() => this.filterBeers(4.6, 7.5)}
          />
          <Button
            className={7.6 >= min && 50 <= max ? "active-item" : ""}
            name="7.6% - 50% "
            onClick={() => this.filterBeers(7.6, 50)}
          />
        </ul>
        <div className="centered">
          <ul className="cards">
            {filterBeers.map(beers => (
              <Link
                to={`/card${beers.id}`}
                className="cards_item"
                key={beers.id}
              >
                <ListItem
                  img={beers.image_url}
                  name={beers.name}
                  description={beers.tagline}
                  key={beers.id}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
