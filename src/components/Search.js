import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = (props) =>{

    const APIUrl =`https://ww.omdbapi.com/?apikey=${props.api_key}&`

    const [state, setState]= useState({

        search: "",
        results: [],
        selected: {}
    });

    useEffect(() =>console.log(state.search), [state.search])
    
    const inputHandler = (event) =>{
        setState({
            search: event.target.value
        });
    }

    return (
        <section>
            <input 
            className='searchBox' 
            type='text' 
            placeholder='search for a movie...'
            value={state.search}
            onChange={inputHandler}  
            />
                 
        </section>
    );
}

export default Search;