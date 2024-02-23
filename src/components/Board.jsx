/* eslint-disable react/jsx-key */
import {useState} from 'react'
import '/src/styles/Board.css'

export default function Board ({players, updatePlayers}) {

  const [gameBoard, updateGameBoard] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])

  const [playerTurn, setPlayerTurn] = useState(false)

  function horizontalVerticalCheck () {
    let currentPlayerNum;
    if (!playerTurn) {
      currentPlayerNum = 1;
    } else {
      currentPlayerNum = 2;
    }

    // oh god get ready for this win check algorithim

    for (let column = 0; column < gameBoard.length; column++) {
      for (let row = 0; row < gameBoard[column].length; row++) {
        if (gameBoard[column][row] === currentPlayerNum) {
          if (gameBoard[column + 1][row] !== 'undefined') {
            if (gameBoard[column + 1][row] === currentPlayerNum) {
              if (gameBoard[column + 2][row] === currentPlayerNum) {
                if (gameBoard[column + 3][row] === currentPlayerNum) {
                  console.log('PLAYER ' + currentPlayerNum + " WINS")
                }
             }
           }
          } else if (gameBoard[column][row - 1] !== 'undefined') {
            if (gameBoard[column][row - 1] === currentPlayerNum) {
              if (gameBoard[column][row - 2] === currentPlayerNum) {
                if (gameBoard[column][row - 3] === currentPlayerNum) {
                 console.log('PLAYER ' + currentPlayerNum + " WINS")
               }
             }
           }
          } else if (gameBoard[column - 1][row] !== 'undefined') {
            if (gameBoard[column - 1][row] === currentPlayerNum) {
              if (gameBoard[column - 2][row] === currentPlayerNum) {
                if (gameBoard[column - 3][row] === currentPlayerNum) {
                  console.log('PLAYER ' + currentPlayerNum + " WINS")
                }
              }
            }
          }
        }
      }
    }
  }

  function handleDiscPlacement (e) {
    let column = e.target.id[0]
    for (let row = 0; row < gameBoard[column].length; row++) {
      if (gameBoard[column][row] === 0) {
        let num;
        if (!playerTurn) {
          num = 1;
        } else {
          num = 2;
        }
        console.log('')
        var updatedBoard = gameBoard.map((col, index)=> {
          if (Number(column) === index) {
            col[row] = num;
            return col;
          } else {
            return col;
          }
        })
        updateGameBoard(updatedBoard)
        horizontalVerticalCheck()
        setPlayerTurn(!playerTurn)
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
            discStyle = {backgroundColor: players[0].color}
            return (
              <div className="disc-container">
                <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle">{columnIndex} {rowIndex}</div>
              </div>
            )
          } else if (value === 2) {
            discStyle = {backgroundColor: players[1].color}
            return (
              <div className="disc-container">
                <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle">{columnIndex} {rowIndex}</div>
              </div>
            )
          } else {
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