import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie';
import Loading from './Loading';

import './MovieList.css';


const MovieList = ({match}) =>{

  let history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    setMovies([]);
    requestMovies(match.params.search);
    },[match.params.search]);

    const requestMovies = (search) =>{
      let requestUrl = 
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&r=json`;
      
      axios.get(requestUrl).then(response => {
        let data = response.data.Search;
        // when nothing is found, this API returns empty arrays instead of a HTTP error
        data ? setMovies(data) : history.push('/404');
      }).catch((e)=>{
          history.push(`/error/${e.response.status}`)
        });    
    }
    return(
        <div className='movie-list'>
            {
              movies != 0 ? 
              movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>) :
              <Loading/>
            } 
        </div>
        );
}

export default MovieList;