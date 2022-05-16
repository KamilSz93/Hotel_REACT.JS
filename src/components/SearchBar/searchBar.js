import React, { useState } from 'react';

function SearchBar() {
    const [term, setTerm] = useState('');
    
    const search = () => {
        console.log("szukaj",  term)
    }

    return (
        <div className='d-flex'>
            <input
                value={term}
                onChange={(e) => {
                    setTerm(e.target.value);
                   // console.log(e.target.value)
                }}
                onKeyDown={(e)=>{e.key === "Enter" && search() }}
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