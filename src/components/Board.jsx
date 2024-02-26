/* eslint-disable react/jsx-key */
import {useState, useRef} from 'react'
import '/src/styles/Board.css'
import GameEnd from '/src/components/GameEnd'
import Disc from '/src/components/Disc'
import Paper from '@mui/material/Paper';

export default function Board ({players, updatePlayers, setPage, theme}) {

  const [gameBoard, updateGameBoard] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])

  const [playerWin, togglePlayerWin] = useState(false)
  const playerTurn = useRef(false);

  const [openResults, toggleOpenResults] = useState(false)
  const handleOpenResults = () => toggleOpenResults(true);
  const handleCloseResults = (event, reason) => {
    if (reason !== 'backdropClick') {
      toggleOpenResults(false);
    }
  };


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
        }
        if (gameBoard[column][row] === currentPlayerNum) {
          let winningDiscs = [];
          winningDiscs.push([column, row])

           // horizontal
          if (gameBoard[column + 1] !== undefined) {
            if (gameBoard[column + 1][row] === currentPlayerNum) {
              if (gameBoard[column + 2] !== undefined) {
                if (gameBoard[column + 2][row] === currentPlayerNum) {
                  if (gameBoard[column + 3] !== undefined) {
                    if (gameBoard[column + 3][row] === currentPlayerNum) {
                      winningDiscs.push([column + 1, row])
                      winningDiscs.push([column + 2, row])
                      winningDiscs.push([column + 3, row])
                      let winInfo = {line: winningDiscs, player: currentPlayerNum, draw: false}
                      togglePlayerWin(winInfo)
                      handleOpenResults()
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
                      winningDiscs.push([column, row - 1])
                      winningDiscs.push([column, row - 2])
                      winningDiscs.push([column, row - 3])
                      let winInfo = {line: winningDiscs, player: currentPlayerNum, draw: false}
                      togglePlayerWin(winInfo)
                      handleOpenResults()
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
                      winningDiscs.push([column + 1, row + 1])
                      winningDiscs.push([column + 2, row + 2])
                      winningDiscs.push([column + 3, row + 3])
                      let winInfo = {line: winningDiscs, player: currentPlayerNum, draw: false}
                      togglePlayerWin(winInfo)
                      handleOpenResults()
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
                      winningDiscs.push([column - 1, row + 1])
                      winningDiscs.push([column - 2, row + 2])
                      winningDiscs.push([column - 3, row + 3])
                      let winInfo = {line: winningDiscs, player: currentPlayerNum, draw: false}
                      togglePlayerWin(winInfo)
                      handleOpenResults()
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (filledSpotCount === 42) {
        togglePlayerWin({line: null, player: null, draw: true})
        handleOpenResults()
      }
    }
  }

  function handleDiscPlacement (e) {
    if (!playerWin) {
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
          console.log(playerTurn.current)
          playerTurn.current = !playerTurn.current
          console.log(playerTurn.current)
          break;
        }
      }
    }

  }

  const gameBoardBackgroundCss = {
    padding: "3em 1em",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5vh",
    backgroundColor: theme.palette.sixth.main
  }

  const currentPlayerDisplayCss = {
    marginBottom: "0.8%",
    fontFamily: "",
  }

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "3%", width: "100%", height: "100%"}}>
      <GameEnd playerWin={playerWin} togglePlayerWin={togglePlayerWin} setPage={setPage} playerTurn={playerTurn} updateGameBoard={updateGameBoard} players={players} openResults={openResults} handleCloseResults={handleCloseResults}/>
      {playerTurn.current ? <Paper sx={currentPlayerDisplayCss}><h2 className="player-turn-display">{players[1].name}&#8217;s turn</h2></Paper> : <Paper sx={currentPlayerDisplayCss}><h2 className="player-turn-display">{players[0].name}&#8217;s turn</h2></Paper>}
      <Paper sx={gameBoardBackgroundCss}>
        <div className="gameboard-container">
          {gameBoard.map((column, columnIndex)=>(
            <div className="gameboard-column" key={columnIndex}>
            {gameBoard[columnIndex].map((discValue, rowIndex)=>(
              <Disc columnIndex={columnIndex} key={rowIndex} rowIndex={rowIndex} discValue={discValue} players={players} playerWin={playerWin} handleDiscPlacement={handleDiscPlacement}/>
            ))}
            </div>
          ))}
        </div>
      </Paper>
    </div>
  )
}