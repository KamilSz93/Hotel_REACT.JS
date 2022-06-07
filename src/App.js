import React, { useEffect, useReducer, useState } from 'react';
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
import BestHotels from './components/Hotels/BestHotels/bestHotels';
import InsporingQuote from './components/InsporingQuote/insporingQuote';
import useStateStorage from './hooks/useStateStorage';

const backendHotels = [
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

const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "danger" ? "primary" : "danger";
      return {
        ...state, theme};
    case "set-hotels":
      return { ...state, hotels: action.hotels };
    case "set-loading":
      return { ...state, loading: action.loading };
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error("nie ma tekiej akcji:" + action.type);
  }
  //return state;
};

const initialState = {
  theme: 'danger',
  hotels: [],
  loading: true,
  isAuthenticated: true,
} 

function App() { 
 // const [hotels, setHotels] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const [theme, setTheme] = useState("danger");
  const [state, dispath] = useReducer(reducer, initialState);

  const [storage, setStorage] = useStateStorage('klucz','wartosc startowa' ) 
 // const changeTheme = () => {
    //const newTheme = theme === 'primary' ? 'danger' : 'primary';
    //setTheme(newTheme);
 // }

  const searchHandler = (term) => {
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
   // setHotels(newHotels);
    dispath({ type: 'set-hotels', hotels: newHotels });
  };

  const getBestHotel = () => {
    if (state.hotels.length < 2) {
      return null;
    } else {
      return state.hotels.sort((a, b) => a.rating > b.rating ? -1 : 1)
      [0];
    }
  }
  
   useEffect(() => {
     setTimeout(() => {
       //setHotels(backendHotels);
       //setLoading(false);
       dispath({ type: 'set-hotels', hotels: backendHotels });
       dispath({ type: 'set-loading', loading: false });
     }, 1000);
   }, []);

   const header = (
     <Header>
       <InsporingQuote />
       <SearchBar onSearch={(term) => searchHandler(term)} />
       <ButtonTheme />
     </Header>
   );
  const content = state.loading ? (
    <LoadingIcon />
  ) : (
      <>
        {storage}
      { getBestHotel() ? <BestHotels getHotel={getBestHotel} /> : null }
      <Hotels hotels={state.hotels} />;
    </>
  );
  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: () => dispath({ type: 'login' }),
        logout: () => dispath({ type: 'logout' }),
      }}
    >
      <ThemeContext.Provider
        value={{
          color: state.theme,
          changeTheme: () => dispath({ type: "change-theme" }),
        }}
      >
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer} />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
