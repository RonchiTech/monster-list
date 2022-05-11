import { Component } from 'react';

class CardList extends Component {
  render() {
    return this.props.monsters.map((monster) => {
      return <h2 key={monster.id}>{monster.name}</h2>;
    });
  }
}

export default CardList;
