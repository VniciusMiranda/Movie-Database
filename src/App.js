import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import Search from './components/Search';
import Results from './components/Results';
import Error from './components/Error';
import Loading from './components/Loading';

import './App.css';


const App = () => {

  const [state, setState] = useState({
    movies:[],
    render: '',
    httpError:''
  });

  // handle the requests and the consequences of it
  const requestMovies = (search) =>{
    let requestUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&r=json` 
    
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

  const renderCheck = () =>{

    switch(state.render){
      case 'loading':
        return(<Loading/>);
      case 'results':
        return(<Results movies={state.movies}/>);
      case 'error':
        return(<Error httpError={state.httpError}/>);
    }
  }
  return (
    <div >
      <header>
        <img src='React-icon.png'/>
        <h1>Movie Database with React</h1>    
      </header>
      <main>
      <Search search={requestMovies}/>
      <div className='content'>{renderCheck()}</div>
      </main>
    </div>
  );
}
export default App;
