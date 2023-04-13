import BeerItem from "./BeerItem";
import "./beerslist.css";

const BeerList = ({ beers, handleSelectedChange, favourites }) => {
  /*  
    favourites == [3, 7, 9]
    beers = [{id: 1}, {id: 2}, {id: 3}, ... ]
  */
  // console.log(beers);
  if (beers == null || beers.length === 0) {
    return <p>Loading...</p>;
  }
  const favouriteBeers = beers.filter((beer) => favourites.includes(beer.id));
  const otherBeers = beers.filter((beer) => !favourites.includes(beer.id));

  return (
    <div>
      <h3>Favourite Beer</h3>
      <ul id="favourites">
        {/* Favourite beers */}
        {favouriteBeers.map((beer) => {
          return (
            <BeerItem
              key={beer.id}
              id={beer.id}
              name={beer.name}
              handleSelectedChange={handleSelectedChange}
            />
          );
        })}
        <br />
      </ul>
      <h3>Other Beers</h3>
      <ul>
        {/* Other beers */}
        {otherBeers.map((beer) => {
          return (
            <BeerItem
              key={beer.id}
              id={beer.id}
              name={beer.name}
              handleSelectedChange={handleSelectedChange}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BeerList;
