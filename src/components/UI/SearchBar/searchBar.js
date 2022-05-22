import { useState } from 'react';
import ThemeContext from '../../../context/themeContext';

function SearchBar(props) {
    
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
            //console.log(e.target.value)
          }}
          onKeyDown={onKeyDownHandler}
          className="form-control me-1"
          type="text"
          placeholder="Szukaj..."
        />
        <ThemeContext.Consumer>
          {({theme}) => (
             <button onClick={search}
                     className={`btn btn-${theme}`}>
                     Szukaj
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    );   
}

export default SearchBar;