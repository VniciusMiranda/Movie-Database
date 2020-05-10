import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Loading from './Loading';

import './MovieInfo.css';

const MovieInfo = ({match}) =>{
    const [movie, setMovie] = useState(0);
    const history = useHistory();

    useEffect(()=>{
        setMovie(0); // loading screen does not render otherwise
        let movieUrl = 
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${match.params.id}&r=json`;
        
        axios.get(movieUrl).then( response => setMovie(response.data))
        .catch(e => history.push(`/${e.status}`));
    },[]);

    //TODO: add more info in this component to pratice HTML and CSS

    return movie == 0 ? <Loading/>:(
       <div className='movie-info'>
           <div className='content'>
                <h2>{movie.Title}<span> {movie.Year}</span></h2>
                <p className='rating'>Rating: {movie.Rated}</p>
                <div className='plot'>
                    <img alt='imagi da hora' src={movie.Poster}/>
                    <p>{movie.Plot}</p>
                </div>
           </div>
       </div>
    );
}

export default MovieInfo;