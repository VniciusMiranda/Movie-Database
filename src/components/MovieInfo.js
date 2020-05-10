import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './MovieInfo.css';

const MovieInfo = () =>{
    let history = useHistory();

    const {movie, setMovie} = useState([]);

    useEffect(()=>{
        let movieUrl = 
        "";
    },[]);
    return(
       <div className='movie-info'>
           <div className='content'>
                <h2>{"batima"}<span>{2013}</span></h2>
                <p className='rating'>Rating: {"baum sô"}</p>
                <div className='plot'>
                    <img alt='imagi da hora'/>
                    <p>{"o cara sai voando e bate nos bandidos. fim."}</p>
                </div>
                <button onClick={()=> history.push('/')} className='close-button'>Close</button>
           </div>
       </div>
    );

}

export default MovieInfo;