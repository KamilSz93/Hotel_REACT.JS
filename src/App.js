import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import LastHotel from './components/Hotels/LastHotel/lastHotel';
import useStateStorage from './hooks/useStateStorage';
import useWebsiteTitle from './hooks/useWebsiteTitle';
import { reducer, initialState } from './reducer';

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



function App() { 
 // const [hotels, setHotels] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const [theme, setTheme] = useState("danger");
  const [state, dispath] = useReducer(reducer, initialState);

  const [lastHotel, setLastHotel] = useStateStorage('Last Hotel', null);
 
  useWebsiteTitle('Strona')
  
  const openHotel = (hotel) => {
    setLastHotel(hotel)
  }

  const removeLastHotel = () => {
    setLastHotel(null);
  }

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

  const lastHotels = (  <div>
                     { lastHotel ? (
                       <LastHotel {...lastHotel} onRemove={removeLastHotel} />
                       ) : null }
                       { getBestHotel() ? <BestHotels getHotel={getBestHotel} /> : null }
                       <Hotels onOpen={openHotel} hotels={state.hotels} />
                     </div>  )
  
  const content = (
    <>
      <Routes>
        <Route  exact={true} path="/" element={lastHotels} />
      </Routes>

      <Routes>
        <Route path="/hotel/:id" element={ <h1>To jest jakis hotel</h1>} />
      </Routes>
    </>
  );
  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispath({ type: "login" }),
          logout: () => dispath({ type: "logout" }),
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
            content={state.loading ? <LoadingIcon /> : content}
            footer={footer}
          />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
