import React from 'react';

import Movie from './Movie';
import './MovieList.css';

const MovieList = ({movies}) =>{
    let movieList = movies.map(
        movie =><Movie key={movie.imdbID} movie={movie}/>
        );
    return(
        <div className='movieList'>
            {movieList}
        </div>
        );
}

export default MovieList;