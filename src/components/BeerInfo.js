const BeerInfo = ({ beer, handleFavChange, favourites }) => {
  if (beer === undefined) return <p>No beer selected</p>;

  const favButtonText = favourites.includes(beer.id)
    ? "Remove from favourites"
    : "Add to favourites";

  return (
    <div>
      <h3> {beer.name}</h3>
      <p>{beer.description}</p>
      <img alt={beer.name} src={beer.image_url} />
      <button onClick={handleFavChange}>{favButtonText}</button>
    </div>
  );
};

export default BeerInfo;
