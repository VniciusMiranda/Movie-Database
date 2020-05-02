import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = (props) =>{

    const APIUrl =`https://ww.omdbapi.com/?apikey=${props.api_key}&`

    const [state, setState]= useState({

        search: "",
        results: [],
        selected: {}
    });
    //temporary, just for debbuging ;) 
    useEffect(() =>console.log(state.search), [state.search]);

    const submmit = () =>{


    }

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