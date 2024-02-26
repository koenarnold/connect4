import '/src/styles/GameEnd.css'
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function GameEnd ({playerWin, togglePlayerWin, setPage, playerTurn, updateGameBoard, players, openResults, handleCloseResults}) {

  function handleGameReset () {
    updateGameBoard([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
    playerTurn.current = false
    togglePlayerWin(false)
  }

  const resultBtnCss = {
    backgroundColor: "#803FD5",
    ':hover': {
      backgroundColor: '#955FDC'
    },
    color: "white",
    height: "3em",
    width: "8em",
    margin: "1.5em 2em",
    fontFamily: '"Josefin Sans", "sans-serif"'
  }



  if (!playerWin) return null

  return (
    <Modal open={openResults} onClose={handleCloseResults} >
       <Paper elevation={3} sx={{position: "absolute", top: '40%', left: '50%', transform: "translate(-50%, -50%)", height: "20em", width: "35em", backgroundColor: "#655080", borderRadius: "0.5vw"}}>
          <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: "4% 3em"}}>
            {playerWin.draw ? <h1 className="result">DRAW</h1> : <h1 className="result">{players[playerWin.player - 1].name} won!</h1>}
            <h2 style={{fontFamily: '"Oswald", "sans-serif"', fontWeight: "500"}}>Thanks for playing!</h2>
            <div style={{display: "flex"}}>
              <Button sx={resultBtnCss} onClick={()=>{setPage(0)}} >Home</Button>
              <Button sx={resultBtnCss} onClick={handleGameReset} >Play Again</Button>
            </div>
          </div>
        </Paper>
    </Modal>
  )
}