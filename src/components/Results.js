import React from 'react';
import './Results.css'
const Results = ({display, movies}) =>{
    
    if(display){
        let movieList = movies.map(movie =><h1>{movie.Title}</h1>);
        return(<div>{movieList}</div>);
    }else{
        return <></>;
    }

}

export default Results;