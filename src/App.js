import { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Menu from "./components/Menu/menu";
import SearchBar from './components/UI/SearchBar/searchBar'
import Layout from './components/Layout/layout'
import Footer from './components/Footer/footer'
import ButtonTheme from './components/UI/ButtonTheme/buttonTheme';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from "./context/reducerContext";
import InsporingQuote from './components/InsporingQuote/insporingQuote';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/home';
import Hotel from './pages/Hotel/hotel';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

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
  const [state, dispath] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispath({ type: 'set-hotels', hotels: newHotels });
  };

   const header = (
     <Header>
       <InsporingQuote />
       <SearchBar onSearch={(term) => searchHandler(term)} />
       <ButtonTheme />
     </Header>
  );

  const content = (
    <div>
      <Switch>
        <Route path="/hotel/:id">
          <Hotel/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
        </Switch>
           {state.loading ? <LoadingIcon/> : null}
    </div>
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
          <ReducerContext.Provider value={{
            state: state,
            dispath:dispath,
          }}>
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;