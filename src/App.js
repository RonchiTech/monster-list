import { useState, useEffect } from 'react';

import CardList from './components/CardList/card-list.component';
import SearchBox from './components/SearchBox/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log('First Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        return data.json();
      })
      .then((monstersData) => {
        setMonsters(monstersData);
      });
  }, []);

  useEffect(() => {
    console.log('Second Effect');
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    console.log('on search');
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  console.log('rendering...');
  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((data) => {
//         return data.json();
//       })
//       .then((monsters) => {
//         this.setState(() => {
//           return {
//             monsters,
//           };
//         });
//       });
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//   }
// }

export default App;
