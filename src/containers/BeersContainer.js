import BeerList from "../components/BeersList";
import BeerInfo from "../components/BeerInfo";
import React, { useState, useEffect } from "react";

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
    setSelected(e.target.value);
  };
  const handleFavChange = (e) => {
    // setFavourites(e.target.value);
  };

  return (
    <>
      <h2>Beers Container</h2>
      <BeerList
        beers={beers}
        handleSelectedChange={handleSelectedChange}
        handleFavChange={handleFavChange}
      />
      <BeerInfo beer={beers[selected - 1]} />
      {/* selected is set to be id */}
    </>
  );
};

export default BeersContainer;
