import React from 'react';

const Error = ({match}) =>{
    console.log(match);
    const {error} = match.params;
    // there was no need to create a file just to add this
    let style ={
        color:'#fff',
        textAlign: 'center',
        marginTop: '80px',
        padding: '10px',
        fontSize: '25px'
    }

    return (
        <div style={style}>
            <h1>{error} error</h1>
            <p> try again with another search :/</p>           
        </div>
    );    
}
export default Error;