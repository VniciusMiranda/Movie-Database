import React, {useState} from 'react';

import Search from './Search';
import MovieList from './MovieList';
import Error from './Error';
import Loading from './Loading';

import './Home.css';

const Home = () =>{

    const [state, setState] = useState({
        movies: [],
        error: '',
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
            error: '404'
          });
        }).catch((e) => {
          setState({
            render: 'error',
            error: e.response.status
          })
        });
      }

      const renderCheck = () =>{
    
        switch(requestInfo.render){
          case 'loading':
            return(<Loading/>);
          case 'results':
            return(<MovieList movies={state.movies}/>);
          case 'error':
            return(<Error httpError={state.httpError}/>);
        }
      }

      return (
        <div class='home-page'>
          <header>
            <img src='React-icon.png'/>
            <h1>Movie Database with React</h1>
          </header>
          <main>
          <Search request={requestMovies}/>
          <div className='content'>{renderCheck()}</div>
          </main>
        </div>
      );
    }
export default Home;
    


