import { Component } from 'react';

import CardList from './components/CardList/card-list.component';
import SearchBox from './components/SearchBox/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        return data.json();
      })
      .then((monsters) => {
        this.setState(() => {
          return {
            monsters,
          };
        });
      });
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monster..."
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
