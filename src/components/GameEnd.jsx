import '/src/styles/GameEnd.css'

export default function GameEnd ({playerWin, togglePlayerWin, setPage, playerTurn, updateGameBoard, players}) {

  function handleGameReset () {
    updateGameBoard([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
    playerTurn.current = false
    togglePlayerWin(false)
  }

  if (!playerWin) return null


  return (
    <div className="end-modal-container">
      <div className="end-modal-content">
        {playerWin.draw ? <h1>DRAW</h1> : <h1>{players[playerWin.player - 1].name} won!</h1>}
        <button onClick={handleGameReset} >Play Again</button>
        <button onClick={()=>{setPage(0)}}>Home</button>
      </div>
    </div>
  )
}