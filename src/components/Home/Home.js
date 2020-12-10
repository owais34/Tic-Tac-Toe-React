import React from 'react';
import {useHistory } from 'react-router-dom';
import './Home.css'

function Home(props) {
    const history=useHistory()
    return (
        <div className="root">
            <h1 style={{marginTop:0,color:"lightgray",fontSize:"5em",padding:"20px"}}>Tic Tac Toe</h1>
            <button className="button" onClick={()=>history.push("/create")}>Create a game</button>
            <button className="button" onClick={()=>history.push("/join")}>Join a game</button>
        </div>
    );
}

export default Home;