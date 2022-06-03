import React, { useCallback,  } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

let state = null;

function useState(defaultValue) {
  const setValue = (newValue) => { };

  const currentState = [defaultValue, setValue];

  return [defaultValue, setValue];
}

function TestHook() {

   const [value, setValue] = useState('start')

  return (
    <>
      <h2>Test Hook!</h2>
      <input
        tyte='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestHook/>
   {/* <App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
