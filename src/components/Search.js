import React, { useState, useEffect } from 'react';

import './Search.css';

const Search = (props) =>{
    const [state, setState] =useState({
        search: ""
    });

    // temporary, just for debbuging ;)
    useEffect(()=>{console.log(state.search)}, [state.search]);

    // save the data on the state
    const handleChange = (event) =>{
        setState({
            search: event.target.value
        });
    }

    return (   
        <div className='search'>
        <div className='buttonBox'>
        <button onClick={()=> props.search(state.search)}>search</button>
        </div>
        <div className='searchBox'>   
            <input
            onKeyPress={(e)=>{
                if(e.key == 'Enter'){
                    props.search(state.search); 
                 }
            }}
            type='text' 
            placeholder='search for a movie...'
            value={state.search}
            onChange={handleChange}  
            />
        </div>
        </div>
    );
}

export default Search;