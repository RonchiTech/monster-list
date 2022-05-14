const CardList = ({ monsters }, forwardRef) =>
  monsters.map((monster) => {
    return <h2 key={monster.id}>{monster.name}</h2>;
  });

export default CardList;
