import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CreateGame.css'
import io from 'socket.io-client'


function CreateGame(props) {
    const history=useHistory()
    const [name,setName]=useState('')
    const [toast,setToast]=useState('')
    
    return (
        <div className="root">
            <h1 style={{marginTop:0,color:"lightgray",fontSize:"4em",padding:"30px"}}>Create game </h1>
            <input type="text" placeholder="Your Name" 
            className="input" value={name} 
            onChange={(e)=>setName(e.target.value)}/>
            <button className="button" onClick={()=>{}}>Create Room</button>
            {(toast)?<h1 style={{alignSelf:"center"}}>{toast}</h1>:null}
        </div>
    );
}

export default CreateGame;