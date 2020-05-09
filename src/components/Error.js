import React from 'react';

const Error = ({match}) =>{
    return (
        <div>
            <h1>{match.error} error</h1>           
        </div>
    );    
}
export default Error;