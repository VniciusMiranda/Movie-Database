import React from 'react';
import './Result.css';

const Result = ({movie})=>{

    return (
    <div className='result'>
        <img src={movie.Poster}/>
        <h3>{movie.Title} </h3>
    </div>
    );
}

export default Result;