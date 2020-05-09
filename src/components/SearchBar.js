import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import './SearchBar.css';


const Search = () =>{
    const [input, setInput] = useState('');
    let history = useHistory();
    return (
        <div className='search-bar'>
            <header>
               
                <h1>Movie Database with React</h1>
            </header>
            <div className='search-bar-container'>
                <div className='button-container'>
                    <button onClick={()=> history.push(`/search/${input}`)}>search</button>
                </div>
                <div className='searchBox'>   
                    <input
                    onKeyPress={(e)=> e.key === 'Enter'? history.push(`/search/${input}`) : null}
                    type='text' 
                    placeholder='search for a movie...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}  
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;