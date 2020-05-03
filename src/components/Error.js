import React from 'react';

import './Error.css';


const Error = ({display, httpError}) =>{

    if(display)
    {
        return (

            <div className='error-Message'>
               <h1>error {httpError}</h1>
            </div>
        );    
    }
    else{
        return <></>;
    }
}
export default Error;