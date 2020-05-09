import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie';
import Loading from './Loading';

import './MovieList.css';


const MovieList = ({match}) =>{

  let history = useHistory();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    requestMovies(match.params.search);
    },[match.params.search]);

    const requestMovies = (search) =>{

      let requestUrl = 
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&r=json`;

      console.log("request url: " + requestUrl);
      axios.get(requestUrl).then(response => {
        let data = response.data.Search;
        // when nothing is found, this API returns empty arrays instead of a HTTP error
        if(data){
          setLoading(false);
          setMovies(data);
        }else{
          history.push('/404');
        }
      }).catch((e)=>{
          console.log(e);
          history.push(`/error/${e.response.status}`)
        });    
    }
    const list = () => {
      let list = movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>);
      return loading ? <Loading/> : list;
    }

    return(
        <div className='movie-list'>
            {list()} 
        </div>
        );
}

export default MovieList;