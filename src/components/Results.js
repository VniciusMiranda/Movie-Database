import React from 'react';

import Result from './Result';
import './Results.css';

const Results = ({movies}) =>{
    let movieList = movies.map(
        movie =><Result key={movie.imdbID} movie={movie}/>
        );
    return(
        <div className='results'>
            {movieList}
        </div>
        );
}

export default Results;