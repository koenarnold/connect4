import {useState} from 'react'
import '/src/styles/Setup.css'

export default function Setup ({playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName}) {

  return (
    <div>
      <h1>Game Setup</h1>
      <div className="player-setup-container">
        <div className="player-setup">
          <h2>{playerOneName}</h2>
        </div>
        <div className="player-setup">
          <h2>{playerTwoName}</h2>
        </div>
      </div>
    </div>
  )
}
