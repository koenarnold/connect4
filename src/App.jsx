import { useState } from 'react'
import './styles/App.css'
import Setup from '/src/components/Setup'
import Board from '/src/components/Board'

function App() {

  const [page, setPage] = useState(0)
  const [playerOneName, setPlayerOneName] = useState('Player 1')
  const [playerTwoName, setPlayerTwoName] = useState('Player 2')
  const [players, updatePlayers] = useState([{name: 'Player 1', color: "#f23224"},{name: 'Player 2', color: "#5099F6"}])

switch (page) {
  case 0:
    return (
      <>
        <Setup playerOneName={playerOneName} setPlayerOneName={setPlayerOneName} playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName} setPage={setPage} players={players} updatePlayers={updatePlayers}/>
      </>
    )
  case 1:
    return (
      <Board players={players} updatePlayers={updatePlayers} />
    )
}

}

export default App
