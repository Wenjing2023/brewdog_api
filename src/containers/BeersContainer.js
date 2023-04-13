import BeerList from "../components/BeersList";
import BeerInfo from "../components/BeerInfo";
import React, { useState, useEffect } from "react";
import "./beerscontainer.css";

const BeersContainer = () => {
  const [selected, setSelected] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    loadBeers();
  }, []);

  const loadBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((beerList) => setBeers(beerList));
  };

  const handleSelectedChange = (e) => {
    setSelected(Number(e.target.id));
  };

  const handleFavChange = () => {
    if (favourites.includes(selected)) {
      removeSelectedFromFavourites();
    } else {
      addSelectedToFavourites();
    }
  };

  const removeSelectedFromFavourites = () => {
    setFavourites(
      favourites.filter((favourite) => {
        return favourite !== selected;
      })
    );
    //favourites = [3, 5, 7]
    //selected = 5

    //new favourites = [3, 7]
  };

  const addSelectedToFavourites = () => {
    console.log([...favourites, selected]);

    setFavourites([...favourites, selected]);
  };

  return (
    <>
      <h2>Beers Container</h2>
      <div className="container">
        <BeerList
          beers={beers}
          handleSelectedChange={handleSelectedChange}
          favourites={favourites}
        />
        <BeerInfo
          beer={beers[selected - 1]}
          handleFavChange={handleFavChange}
          favourites={favourites}
        />
        {/* selected is set to be id */}
      </div>
    </>
  );
};

export default BeersContainer;
