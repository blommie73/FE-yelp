import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import BusinessList from '../components/BusinessList/BusinessList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Portfolio</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }

}

export default App;
