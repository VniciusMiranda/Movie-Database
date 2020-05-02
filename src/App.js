import React from 'react';
import './App.css';
import Search from './components/Search'

const App = () => {

  const API_KEY = "{insert the key here}"

  return (
    <div >
      <header>
        <label><img src='React-icon.png'/></label>
        <h1>Movie Database with React</h1>    
      </header>
      <main>
        <Search api_key={API_KEY} />    
      </main>
    </div>
  );
}

export default App;
