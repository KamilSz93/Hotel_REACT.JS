import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from "./components/Menu/menu";
import Hotels from './components/Hotels/hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon'
import SearchBar from './components/UI/SearchBar/searchBar'
import Layout from './components/Layout/layout'
import Footer from './components/Footer/footer'
import ButtonTheme from './components/UI/ButtonTheme/buttonTheme';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';


class App extends Component {
  static contextType = ThemeContext;

  hotels = [
    {
      id: 1,
      name: "Pod akacjami",
      city: "Warszawa",
      rating: 6.2,
      description:
        "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
      image: "",
    },
    {
      id: 2,
      name: "Dębowy",
      city: "Lublin",
      rating: 5.9,
      description:
        "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
      image: "",
    },
  ];

  state = {
    hotels: [],
    loading: true,
    theme: "danger",
    isAuthenticated: false,
  };

  constructor(props) {
    super(props);
  }

  searchHandler(term) {
    const hotels = [...this.state.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels });
      this.setState({ loading: false });
    }, 1000);
    //console.log('componnt zmontowany ')
  }

  changeTheme = () => {
    //tutaj musi byc funkcja strzalkowa innaczej nie zadziala
    const newTheme = this.state.theme === "primary" ? "danger" : "primary";
    this.setState({ theme: newTheme });
  };

  render() {
    const header = (
      <Header>
        <SearchBar onSearch={(term) => this.searchHandler(term)} />
        <ButtonTheme />
      </Header>
    );

    const menu = <Menu />;

    const content = this.state.loading ? (
      <LoadingIcon />
    ) : (
      <Hotels hotels={this.state.hotels} />
    );

    const footer = <Footer />;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          login: () => this.setState({ isAuthenticated: true }),
          logout: () => this.setState({ isAuthenticated: false }),
        }}
      >
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            changeTheme: this.changeTheme,
          }}
        >
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;
