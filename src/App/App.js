import React from 'react';
import BusinessList from '../components/BusinessList/BusinessList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>ravenous</h1>

        <BusinessList />
      </div>
    )
  }

}

export default App;
