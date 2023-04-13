const BeerItem = ({ name, id, handleSelectedChange }) => {
  return (
    <li>
      <h3 id={id} onClick={handleSelectedChange}>
        {name}
      </h3>
    </li>
  );
};

export default BeerItem;
