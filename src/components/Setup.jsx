import {useState} from 'react'
import '/src/styles/Setup.css'

export default function Setup ({playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName, setPage}) {

  return (
    <div>
      <h1>Game Setup</h1>
      <button onClick={()=>{setPage(1)}}>board</button>
      <div className="player-setup-container">
        <div className="player-setup">
          <h2>{playerOneName}</h2>
          <input type="text" onChange={(e)=>{setPlayerOneName(e.target.value)}} style={{marginBottom: "5vh"}}/>
          <div className="color-selector-container">
            <div className="circle" style={{backgroundColor: "#f23224"}}></div>
            <div className="circle" style={{backgroundColor: "#c619e0"}}></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="player-setup">
          <h2>{playerTwoName}</h2>
          <input type="text" onChange={(e)=>{setPlayerTwoName(e.target.value)}} style={{marginBottom: "5vh"}}/>
          <div className="color-selector-container">
          <div className="circle" style={{backgroundColor: "#f23224"}}></div>
            <div className="circle" style={{backgroundColor: "#c619e0"}}></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
