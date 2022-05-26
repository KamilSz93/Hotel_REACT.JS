import React, { useEffect, useState } from 'react';
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

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("danger");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeTheme = () => {
    const newTheme = theme === 'primary' ? 'danger' : 'primary';
    setTheme(newTheme);
  }

  const searchHandler = (term) => {
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    setHotels(newHotels);
  };

   useEffect(() => {
     setTimeout(() => {
       setHotels(backendHotels);
       setLoading(false);
     }, 1000);
   }, []);

   const header = (
     <Header>
       <SearchBar onSearch={(term) => searchHandler(term)} />
       <ButtonTheme />
     </Header>
   );
   const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />;
   const menu = <Menu />;
   const footer = <Footer />;

  return (
     <AuthContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          login:()=> setIsAuthenticated(true),
          logout:()=> setIsAuthenticated(false),
        }}
      >
        <ThemeContext.Provider
          value={{
            theme: theme,
            changeTheme: changeTheme,
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
  )
}

export default App;
