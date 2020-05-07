import React, { useState, useEffect } from 'react';

import './Search.css';


const Search = (props) =>{
    const [state, setState] =useState({
        inputString: ""
    });

    // temporary, just for debbuging ;)
    useEffect(()=>{console.log(state.inputString)}, [state.inputString]);

    // save the data on the state
    const handleChange = (event) =>{
        setState({
            inputString: event.target.value
        });
    }

    return (   
        <div className='search'>
        <div className='buttonBox'>
        <button onClick={()=> props.request(state.inputString)}>search</button>
        </div>
        <div className='searchBox'>   
            <input
            onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    props.request(state.inputString); 
                 }
            }}
            type='text' 
            placeholder='search for a movie...'
            value={state.inputString}
            onChange={handleChange}  
            />
        </div>
        </div>
    );
}

export default Search;