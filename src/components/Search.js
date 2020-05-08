import React, { useState, useEffect } from 'react';

import './Search.css';


const Search = (props) =>{
    const [input, setInput] = useState('');
    
    return (   
        <div className='search'>
        <div className='buttonBox'>
        <button onClick={()=> props.request(input)}>search</button>
        </div>
        <div className='searchBox'>   
            <input
            onKeyPress={(e)=> e.key === 'Enter'? props.request(input): null}
            type='text' 
            placeholder='search for a movie...'
            value={input}
            onChange={(e) => setInput(e.target.value)}  
            />
        </div>
        </div>
    );
}

export default Search;