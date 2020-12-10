import React from 'react';

function Wait(props) {
    return (
        <div className="root">
            <img src="https://i.stack.imgur.com/kOnzy.gif" style={{width:"300px",alignSelf:"center",marginTop:"40px"}} 
            alt="loading"/>
            <h1 style={{fontSize:"4em",color:"lightgray"}}>Waiting for {props.motive}</h1>
        </div>
    );
}

export default Wait;