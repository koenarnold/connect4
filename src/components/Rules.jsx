import '/src/styles/Rules.css'
import Modal from '@mui/material/Modal';
import {useState} from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Rules ({openRules, handleCloseRules}) {


  const closeBtnCss = {
    backgroundColor: "black",
    color: "white",
    ':hover': {
      backgroundColor: '#302D2D'
    },
    height: "4em",
    width: "6em",
    fontFamily: '"Josefin Sans", "sans-serif"'
  }

  return (
    <Modal open={openRules} onClose={handleCloseRules} >
        <Paper elevation={3} sx={{position: "absolute", top: '40%', left: '50%', transform: "translate(-50%, -50%)", height: "30em", width:  "50em"}}>
          <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: "0 3em"}}>
            <h1 style={{fontFamily: '"Oswald", "sans-serif"'}}>Rules</h1>
            <h2>Connect 4 is played using a 6 x 7 board in which the goal is form an unbroken horizontal, vertical, or diagonal line of discs. </h2>
            <h2>Players will choose a disc color, and take turns placing discs.</h2>
            <h2>If all discs are placed with no player forming a line, then the match is a draw. </h2>
            <h2 style={{marginTop: '-0.2em'}}>Enjoy!</h2>
            <Button variant="filled" sx={closeBtnCss} onClick={handleCloseRules}>close</Button>
          </div>
        </Paper>
    </Modal>
  )
}