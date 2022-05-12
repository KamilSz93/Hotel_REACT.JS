import './App.css';
import Header from './components/Header/header';
import Menu from "./components/Menu/menu";
import Hotels from './components/Hotels/hotels';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Hotels />
    </div>
  );
}

export default App;
