import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function JoinGame(props) {
    const history=useHistory()
    const [name,setName]=useState('')
    const [roomId,setRoomId]=useState('')
    
    return (
        <div className="root">
            <h1 style={{marginTop:0,color:"lightgray",fontSize:"4em",padding:"30px"}}>Join Game</h1>
            <input type="text" placeholder="Your Name" className="input" value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="RoomId" className="input"
            value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
            <button className="button" onClick={()=>{history.push("/waitingo")}}>Join Game</button>
        </div>
    );
}

export default JoinGame;