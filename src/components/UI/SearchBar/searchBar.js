import { useState, useContext, useEffect, useRef } from 'react';
import ThemeContext from '../../../context/themeContext';

function SearchBar(props) {

  const theme = useContext(ThemeContext);
    
  const [term, setTerm] = useState('');

  const inputRef = useRef();
    
  
    const search = () => {
        props.onSearch(term);
    }

     const onKeyDownHandler = (e) => {
       if (e.key === "Enter") {
         search();
       }
  };

  const focusInput = () => {
    inputRef.current.focus();
  }
  
  useEffect(() => {
      focusInput()
  }, []);

    return (
      <div className="d-flex">
        <input
          ref={inputRef}
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          onKeyDown={onKeyDownHandler}
          className="form-control me-1"
          type="text"
          placeholder="Szukaj..."
        />
             <button onClick={search}
                     className={`btn btn-${theme.color}`}>
                     Szukaj
            </button>
      </div>
    );   
}

export default SearchBar;