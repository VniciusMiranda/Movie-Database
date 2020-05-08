import React, { useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import MovieInfo from './components/MovieInfo';

import './App.css';

const App = () => {

    return(
      <Router>
          <Home/>
          <Switch>  
            <Route path='/:search' exact></Route>
            <Route path='/:search/:id'></Route>
          </Switch>
      </Router>
    );

}

export default App;