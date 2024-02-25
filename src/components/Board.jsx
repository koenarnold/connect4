/* eslint-disable react/jsx-key */
import {useState, useRef} from 'react'
import '/src/styles/Board.css'

export default function Board ({players, updatePlayers}) {

  const [gameBoard, updateGameBoard] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])

  const playerTurn = useRef(false);


  function winCheck () {

    let currentPlayerNum;
    let filledSpotCount = 0;

    if (!playerTurn.current) {
      currentPlayerNum = 1;
    } else {
      currentPlayerNum = 2;
    }

    // oh god get ready for this win check algorithim
    // i hate these if statements, very cluttered
    // lets try to consolidate these to their own functions in the
    // future to make it a lil prettier

    for (let column = 0; column < gameBoard.length; column++) {
      for (let row = 0; row < gameBoard[column].length; row++) {
        if (gameBoard[column][row] > 0) {
          filledSpotCount = filledSpotCount + 1;
          console.log(filledSpotCount)
        }
        if (gameBoard[column][row] === currentPlayerNum) {

           // horizontal
          if (gameBoard[column + 1] !== undefined) {
            if (gameBoard[column + 1][row] === currentPlayerNum) {
              if (gameBoard[column + 2] !== undefined) {
                if (gameBoard[column + 2][row] === currentPlayerNum) {
                  if (gameBoard[column + 3] !== undefined) {
                    if (gameBoard[column + 3][row] === currentPlayerNum) {
                      alert('Player ' + currentPlayerNum + ' Won by horizontal')
                    }
                  }
                }
              }
            }
          }

          // vertical
          if (gameBoard[column][row - 1] !== undefined) {
            if (gameBoard[column][row - 1] === currentPlayerNum) {
              if (gameBoard[column][row - 2] !== undefined) {
                if (gameBoard[column][row - 2] === currentPlayerNum) {
                  if (gameBoard[column][row - 3] !== undefined) {
                    if (gameBoard[column][row - 3] === currentPlayerNum) {
                      alert('Player ' + currentPlayerNum + ' Won by vertical')
                    }
                  }
                }
              }
            }
          }

          //diagonal right
          if (gameBoard[column + 1] !== undefined) {
            if (gameBoard[column + 1][row + 1] === currentPlayerNum) {
              if (gameBoard[column + 2] !== undefined) {
                if (gameBoard[column + 2][row + 2] === currentPlayerNum) {
                  if (gameBoard[column + 3] !== undefined) {
                    if (gameBoard[column + 3][row + 3] === currentPlayerNum) {
                      alert('Player ' + currentPlayerNum + ' Won by diagonal right')
                    }
                  }
                }
              }
            }
          }

          //diagonal left
          if (gameBoard[column - 1] !== undefined) {
            if (gameBoard[column - 1][row + 1] === currentPlayerNum) {
              if (gameBoard[column - 2] !== undefined) {
                if (gameBoard[column - 2][row + 2] === currentPlayerNum) {
                  if (gameBoard[column - 3] !== undefined) {
                    if (gameBoard[column - 3][row + 3] === currentPlayerNum) {
                      alert('Player ' + currentPlayerNum + ' Won by diagonal left')
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (filledSpotCount === 42) {alert("DRAW")}
    }
  }

  function handleDiscPlacement (e) {
    let column = e.target.id[0]
    for (let row = 0; row < gameBoard[column].length; row++) {
      if (gameBoard[column][row] === 0) {
        let num;
        if (!playerTurn.current) {
          num = 1;
        } else {
          num = 2;
        }
        var updatedBoard = gameBoard.map((col, index)=> {
          if (Number(column) === index) {
            col[row] = num;
            return col;
          } else {
            return col;
          }
        })
        updateGameBoard(updatedBoard)
        winCheck()
        playerTurn.current = !playerTurn.current
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