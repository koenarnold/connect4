/* eslint-disable react/jsx-key */
import {useState} from 'react'
import '/src/styles/Board.css'

export default function Board () {

  const [gameBoard, updateGameBoard] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])

  const [playerTurn, setPlayerTurn] = useState(false)

  function handleDiscPlacement (e) {
    console.log(e.target.id[0])
    console.log(e.target.value)
    let column = e.target.id[0]
    for (let row = 0; row < gameBoard[column].length; row++) {
      if (gameBoard[column][row] === 0) {
        console.log('aight found a spot')
        let num;
        if (!playerTurn) {
          num = 1;
        } else {
          num = 2;
        }
        console.log('')
        var updatedBoard = gameBoard.map((col, index)=> {
          console.log(typeof column)
          if (Number(column) === index) {
            col[row] = num;
            return col;
          } else {
            return col;
          }
        })
        console.log('updated board: ' )
        console.log(updatedBoard)
        updateGameBoard(updatedBoard)
        setPlayerTurn(!playerTurn)
        console.log('num was: ' + num)
        break;
      }
    }
  }


  return (
    <div className="gameboard-container">
      {gameBoard.map((column, columnIndex)=>(
        <div className="gameboard-column">
        {gameBoard[columnIndex].map((value, rowIndex)=>{

          let discStyle;
          const discId = columnIndex.toString() + rowIndex.toString();

          if (value === 1) {
            console.log('1')
            discStyle = {backgroundColor: '#f23224'}
            return (
              <div className="disc-container">
                <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle">{columnIndex} {rowIndex}</div>
              </div>
            )
          } else if (value === 2) {
            console.log('2')
            discStyle = {backgroundColor: '#c619e0'}
            return (
              <div className="disc-container">
                <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle">{columnIndex} {rowIndex}</div>
              </div>
            )
          } else {
            console.log('0')
            return (
              <div className="disc-container">
                <div onClick={handleDiscPlacement} id={discId} className="circle">{columnIndex} {rowIndex}</div>
              </div>
            )
          }
        }
        )}
        </div>
      ))}
    </div>
  )
}