const BeerInfo = ({ beer }) => {
  if (beer === undefined) return <p>No beer selected</p>;
  return (
    <>
      <h3> {beer.name}</h3>
      <p>{beer.description}</p>
      <img alt={beer.name} src={beer.image_url} />
    </>
  );
};

export default BeerInfo;
