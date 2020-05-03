import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';

import Search from './components/Search';
import Results from './components/Results';
import Error from './components/Error';
import Loading from './components/Loading';


const App = () => {

  const APIKey = '';

  const [state, setState] = useState({
    movies:[],
    displayResults: false,
    displayError: false,
    waiting: false,
    httpError:""
  });

  // handle the requests and the consequences of it
  const requestMovies = (search) =>{

    let requestUrl = `https://www.omdbapi.com/?apikey=${APIKey}&s=${search}&r=json` 

    setState({
      displayResults: false,
      displayError: false,
      waiting:true
    });
    console.log("request url: " + requestUrl);
    axios.get(requestUrl).then(response => {
      console.log(response);
      if(response.data.Search){
        setState({
          movies: response.data.Search,
          displayResults: true,
          waiting:false,
          displayError:false,
          httpError:''
        });
      }
      else{
        setState({
          displayResults: false,
          waiting:false,
          displayError: true,
          httpError: '404'
        });
      }

    }).catch((e) => {
      setState({
        waiting: false,
        displayResults: false,
        displayError: true,
        httpError: e.response.status
      })
    });
  }


  return (
    <div >
      <header>
        <img src='React-icon.png'/>
        <h1>Movie Database with React</h1>    
      </header>
      <main>
      <Search search={requestMovies}/>
      <div className='content'> 
        <Results display={state.displayResults} movies={state.movies}/>
        <Error display={state.displayError} httpError={state.httpError} />
        <Loading display={state.waiting}/>
      </div>
      </main>
    </div>
  );
}

export default App;
