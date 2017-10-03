import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import logo from './logo.svg';

class App extends React.component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
