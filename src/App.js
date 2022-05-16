import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from "./components/Menu/menu";
import Hotels from './components/Hotels/hotels';


class App extends Component {

    state = {
      hotels: [
        {
          id: 1,
          name: "Pod akacjami",
          city: "Warszawa",
          rating: "6.2",
          description:
            "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
          image: ""
        },
        {
          id: 2,
          name: "Pod debowy",
          city: "Lublin",
          rating: "5.9",
          description: "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
          image: ""
        },
      ]
    };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
