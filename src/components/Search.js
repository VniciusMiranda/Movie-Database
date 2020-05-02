import React, { useState, useEffect } from 'react';

import './Search.css';


const Search = (props) =>{
    const [state, setState] =useState({
        search: ""
    });

    const submmit = () =>{
        props.search(state.search);
    }

    useEffect(()=>{console.log(state.search)}, [state.search]);

    const inputHandler = (event) =>{
        setState({
            search: event.target.value
        });
    }

    return (
       
        <section>
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
        </section>
    );
}

export default Search;