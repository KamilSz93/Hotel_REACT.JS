import React, { useState } from 'react';

function SearchBar(props) {
    
    const [term, setTerm] = useState('');
    
    const search = () => {
        props.onSearch(term);
    }

    return (
        <div className='d-flex'>
            <input
                value={term}
                onChange={(e) => {
                    setTerm(e.target.value);
                   // console.log(e.target.value)
                }}
                onKeyDown={(e)=>{e.key === "Enter" && props.onSearch(term) }}
                    className="form-control me-1"
                    type='text'
                    placeholder='Szukaj...'/>
            <button
                onClick={search}
                className='btn btn-primary'>
                Szukaj
            </button>
        </div>
    );   
}

export default SearchBar;