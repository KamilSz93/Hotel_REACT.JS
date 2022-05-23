import { useState, useContext } from 'react';
import ThemeContext from '../../../context/themeContext';

function SearchBar(props) {

    const color = useContext(ThemeContext);
    
    const [term, setTerm] = useState('');
    
    const search = () => {
        props.onSearch(term);
    }

     const onKeyDownHandler = (e) => {
       if (e.key === "Enter") {
         search();
       }
     };

    return (
      <div className="d-flex">
        <input
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
                     className={`btn btn-${color.theme}`}>
                     Szukaj
            </button>
      </div>
    );   
}

export default SearchBar;