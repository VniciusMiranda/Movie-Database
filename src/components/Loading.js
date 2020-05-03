import React from 'react';

import './Loading.css';


const Loading = ({display}) =>{
    if(display){

        return(
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        );
    }
    else{
        return <></>;
    }
}

export default Loading;