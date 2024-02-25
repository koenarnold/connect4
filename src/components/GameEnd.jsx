import '/src/styles/GameEnd.css'

export default function GameEnd ({playerWin, togglePlayerWin, setPage, playerTurn, updateGameBoard}) {

  function handleGameReset () {
    updateGameBoard([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
    playerTurn.current = false
    togglePlayerWin(false)
  }

  if (!playerWin) return null

  return (
    <div className="end-modal-container">
      <div className="end-modal-content">
        <h1>player {playerWin.player} won!</h1>
        <button onClick={handleGameReset} >Play Again</button>
        <button onClick={()=>{setPage(0)}}>Home</button>
      </div>
    </div>
  )
}