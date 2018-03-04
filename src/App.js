import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchbar/searchbar';
// import SearchButton from './search-button/search-button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      selectedColor: "f8f7f9",
    }
  };
  
  url = "http://www.mocky.io/v2/5a37a7403200000f10eb6a2d";

  getColors = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    }).then((responseText) => {
      const colors = JSON.parse(responseText);
      this.setState({
        colors: colors
      });
    });

  findColor = (term) => {
    return this.state.colors.filter((element) => {
      return element.name.indexOf(term) > -1 || element.hex.indexOf(term) >-1;
    });
  };

  changeBgColor = (hex) => {
    return this.setState({
      selectedColor: hex
    });
  }

  render() {
    
    const findColor = (term) => {return this.findColor(term)};
    const changeColor = (hex) => { return this.changeBgColor(hex) };

    return (
      <div className="App" >
        <div className="background" style = {{"background": "#" + this.state.selectedColor}}></div> 
        <div className="App-container">
          <h1>Color Change App</h1>
          <SearchBar 
          onColorSearch = {findColor}
          onColorChange = {changeColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
