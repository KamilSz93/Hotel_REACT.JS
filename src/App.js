import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";
import SearchBar from "./components/UI/SearchBar/searchBar";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";
import ButtonTheme from "./components/UI/ButtonTheme/buttonTheme";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import InsporingQuote from "./components/InsporingQuote/insporingQuote";
import { reducer, initialState } from "./reducer";
import Home from "./pages/Home/home";
import Hotel from "./pages/Hotel/hotel";
import Search from "./pages/Search/search";
import Profil from "./pages/Profil/profil";
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/login";
import AuthenticatedRoute from "./components/AuthenticatedRoute/authenticatedRoute";
import ErrorBoundary from "./hoc/errorBoundary";
import AddHotel from "./pages/Profil/MyHotels/AddHotel/addHotel";
import EditHotel from "./pages/Profil/MyHotels/EditHotel/editHotel";
import Register from "./pages/Auth/Register/register";

function App() {
  const [state, dispath] = useReducer(reducer, initialState);

  const checkUser = () => {
    const tokenData = JSON.parse(window.localStorage.getItem("token-data"));
    if (tokenData) {
      dispath({ type: "login" });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const header = (
    <Header>
      <InsporingQuote />
      <SearchBar />
      <ButtonTheme />
    </Header>
  );

  const content = (
    <div>
      <Switch>
        <Route path="/profil/hotele/edytuj/:id">
          <EditHotel />
        </Route>

        <Route path="/profil/hotele/dodaj">
          <AddHotel />
        </Route>

        <AuthenticatedRoute path="/profil" component={Profil} />

        <Route path="/hotele/:id">
          <Hotel />
        </Route>

        <Route path="/wyszukaj/:term?">
          <Search />
        </Route>

        <Route path="/zaloguj">
          <Login />
        </Route>
        <Route path="/rejstaracja">
          <Register />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );

  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          user: state.user,
          login: (user) => dispath({ type: "login", user }),
          logout: () => dispath({ type: "logout" }),
        }}
      >
        <ThemeContext.Provider
          value={{
            color: state.theme,
            changeTheme: () => dispath({ type: "change-theme" }),
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispath: dispath,
            }}
          >
            <ErrorBoundary>
              <Layout
                header={header}
                menu={menu}
                content={content}
                footer={footer}
              />
            </ErrorBoundary>
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
