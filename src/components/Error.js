import React from 'react';

import './Error.css';


const Error = ({display, httpError}) =>{
    return (

        <div className='error-Message'>
            <h1>error {httpError}</h1>
        </div>
    );    
}
export default Error;