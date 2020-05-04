import React from 'react';

import './Error.css';

const Error = ({ httpError}) =>{
    return (
        <div className='error-message'>
            <h1>error {httpError}</h1>
        </div>
    );    
}
export default Error;