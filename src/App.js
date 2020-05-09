import React, { useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import MovieInfo from './components/MovieInfo';
import MovieList from './components/MovieList';
import Error from './components/Error';

import './App.css';

const App = () => {

    return(      
        
        <Router>   
            <SearchBar/>
            <div className='content'>  
                <Switch>
                    <Route path='/:error' exact component={Error} /> 
                    <Route path='/search/:search' exact component={MovieList}/> 
                    <Route path='/search/:search/:id' component={MovieInfo}></Route>
                </Switch>
            </div>
        </Router>
    );

}

export default App;