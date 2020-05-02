import React, { useState } from 'react';
import axios from 'axios'; 
import './App.css';

import Search from './components/Search';
import Results from './components/Results';

const App = () => {

  const APIKey = '{enter your api key here }'
  
  const [state, setState] = useState({
    movies:[],
    displayResults: false,
    displayError: false,
    watting: false
  });

  const requestMovies = (search) =>{

    let requestUrl = `https://ww.omdbapi.com/?apikey=${APIKey}&s=${search}` 
    setState({
      displayResults: false,
      displayError: false,
      waiting:true
    });
    axios.get(requestUrl).then(response => {
      setState({
        movies: response,
        displayResults: true,
        waiting:false
      });
    }).catch((error) => {
      console.log(error);
      setState({
        displayError: true
      })
    });
  }

  return (
    <div >
      <header>
        <label><img src='React-icon.png'/></label>
        <h1>Movie Database with React</h1>    
      </header>
      <main>
      <Search search={requestMovies}/>    
        {/* <Movie/>
        <Results/> */}
      </main>
    </div>
  );
}

export default App;
