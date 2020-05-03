import React from 'react';

import Result from './Result';
import './Results.css';

const Results = ({display, movies}) =>{
    
    if(display){
        let movieList = movies.map(
            movie =><Result key={movie.imdbID} movie={movie}/>
            );
        
        
        return(
            <div className='results'>
                {movieList}
            </div>
            );
    }else{
        return <></>;
    }

}

export default Results;