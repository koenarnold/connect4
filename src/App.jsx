import { useState } from 'react'
import './styles/App.css'
import Setup from '/src/components/Setup'

function App() {

  const [page, setPage] = useState(0)
  const [playerOneName, setPlayerOneName] = useState('Player 1')
  const [playerTwoName, setPlayerTwoName] = useState('Player 2')

switch (page) {
  case 0:
    return (
      <>
        <Setup playerOneName={playerOneName} setPlayerOneName={setPlayerOneName} playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName}/>
      </>
    )
  case 1:
    break;
}

}

export default App
