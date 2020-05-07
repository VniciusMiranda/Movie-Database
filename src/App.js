import React, { useState} from 'react';
import axios from 'axios'; 

import Home from './components/Home';
import MovieInfo from './components/MovieInfo';

import './App.css';

const App = () => {

  const [state, setState] = useState({
    movies:[],
    httpError:'',
    render:''
  });

    const requestMovies = (search) =>{
      let requestUrl = 
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&r=json`;
      
      console.log("request url: " + requestUrl);
      setState({render: 'loading'});
      axios.get(requestUrl).then(response => {
        // when nothing is found, this API returns empty arrays instead of a HTTP error
        response.data.Search ? 
        setState({
          movies: response.data.Search,
          render: 'results'
        }):
        setState({
          render: 'error',
          httpError: '404'
        });
      }).catch((e) => {
        setState({
          render: 'error',
          httpError: e.response.status
        })
      });
    }

    return(
      <>
        <Home requestMovies={requestMovies} requestInfo={{
          movies: state.movies,
          httpError: state.httpError,
          render: state.render
        }} />
        <MovieInfo/>
      </>

    );
}

export default App;