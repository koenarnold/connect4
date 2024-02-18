/* eslint-disable react/jsx-key */
import {useState} from 'react'
import '/src/styles/Board.css'

export default function Board () {

  let gameBoard = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]


  return (
    <div className="gameboard-container">
      {gameBoard.map((column, columnIndex)=>(
        <div className="gameboard-column">
        {gameBoard[columnIndex].map((value, rowIndex)=>(
          <div className="disc-container">
            <div className="circle">{columnIndex} {rowIndex}</div>
          </div>
        ))}
        </div>
      ))}
    </div>
  )
}