import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from "./components/Menu/menu";
import Hotels from './components/Hotels/hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon'
import SearchBar from './components/UI/SearchBar/searchBar'


class App extends Component {

  hotels = [
        {
          id: 1,
          name: "Pod akacjami",
          city: "Warszawa",
          rating: 6.2,
          description:
            "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
          image: ""
        },
        {
          id: 2,
          name: "Dębowy",
          city: "Lublin",
          rating: 5.9,
          description: "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
          image: ""
        },
      ]

    state = {
      hotels: [],
      loading: true,
    };
  
  constructor(props) {
    super(props)
   // console.log('component constructor')
  }
  
  searchHandler(term) {
    const hotels = [...this.state.hotels]
      .filter(x => x.name.toLowerCase()
        .includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels })
      this.setState({ loading: false })
    }, 1000);
    //console.log('componnt zmontowany ')
  }

  
  render() {
    //console.log('component wyrenderowany')
    return (
      <div className="App">
        <Header>
          <SearchBar onSearch={ term => this.searchHandler(term) }  />
        </Header>

        <Menu />
        {this.state.loading ? (
          <LoadingIcon />
        ) : (
          <Hotels hotels={this.state.hotels} />
        )}
      </div>
    );
  }
}

export default App;
