import React from 'react';
import { useHistory } from 'react-router-dom';


const Movie = ({movie})=>{
    let history = useHistory()
    return (
    <div className='movie' onClick={()=> history.push(`/search/${movie.Title}/${movie.imdbID}`)}>
        <img src={movie.Poster}/>
        <h3>{movie.Title} </h3>
    </div>
    );
}

export default Movie;