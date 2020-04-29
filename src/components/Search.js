import React, { useState } from 'react';
import './Search.css';

const Search = (props) =>{

    const [state, setState]= useState({

        search: "",
        results: [],
        selected: {}
    });

    const inputHandler = () =>{

    }

    return (
        <section>
            <input 
            className='searchBox' 
            type='text' 
            placeholder='search for a movie...'
            onChange={inputHandler}  
            />
                 
        </section>
    );
}

export default Search;