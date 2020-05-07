import React from 'react';

import Search from './Search';
import MovieList from './MovieList';
import Error from './Error';
import Loading from './Loading';

import './Home.css';

const Home = ({requestMovies, requestInfo}) =>{

      const renderCheck = () =>{
    
        switch(requestInfo.render){
          case 'loading':
            return(<Loading/>);
          case 'results':
            return(<MovieList movies={requestInfo.movies}/>);
          case 'error':
            return(<Error httpError={requestInfo.httpError}/>);
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
    


