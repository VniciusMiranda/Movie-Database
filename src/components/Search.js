import React, { useState, useEffect } from 'react';

import './Search.css';

const Search = (props) =>{
    const [state, setState] =useState({
        search: ""
    });

    // send the data to the parent component: App
    const submmit = () =>{
        props.search(state.search);
    }

    // temporary, just for debbuging ;)
    useEffect(()=>{console.log(state.search)}, [state.search]);

    // save the data on the state
    const inputHandler = (event) =>{
        setState({
            search: event.target.value
        });
    }

    return (
       
        <div className='search'>
        <div className='buttonBox'>
        <button onClick={submmit}>search</button>
        </div>
        <div className='searchBox'>   
            <input  
            type='text' 
            placeholder='search for a movie...'
            value={state.search}
            onChange={inputHandler}  
            />
        </div>
        </div>
    );
}

export default Search;