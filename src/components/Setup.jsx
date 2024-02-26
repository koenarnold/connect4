import {useState} from 'react'
import '/src/styles/Setup.css'
import Rules from '/src/components/Rules'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';



export default function Setup ({setPage, players, updatePlayers, theme, NameTextInput}) {

  const [showRulesModal, setShowRulesModal] = useState(false)
  const [colorHasBeenChosen, setColorHasBeenChosen] = useState({1: '1', 2: '13'})

  const [openRules, toggleOpenRules] = useState(false)
  const handleOpenRules = () => toggleOpenRules(true);
  const handleCloseRules = () => toggleOpenRules(false);


  const gameSetupContainerCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: "8%"
  }

  const colorSelectorContainerCss = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1vh",
    borderRadius: "1vw",
    backgroundColor: theme.palette.sixth.main
  }

  const rulesBtnCss = {
    backgroundColor: "#ffffff",
    ':hover': {
      backgroundColor: '#E7E4E4'
    },
    position: "fixed",
    top: "0",
    margin: "3em 0",
    height: "3em",
    width: "3em",
    fontSize: "1em",
    borderRadius: "1vw",
    fontFamily: '"Josefin Sans", "sans-serif"'
  }

  function handleGameStart () {
    if (players[0].color === players[1].color) {
      alert("Please choose different colors")
    } else {
      if (players[0].name.length === 0 || players[1].name.length === 0) {
        alert("Invalid name")
      } else {
        setPage(1)
      }
    }
  }

  function handleNameChange (e) {
    let updatedNames = players.map((playerInfo, index) => {
      if (e.target.id[e.target.id.length - 1] === "1") {
        if (index === 0) {
          playerInfo.name = e.target.value;
          return playerInfo;
        } else {
          return playerInfo;
        }
      } else if (e.target.id[e.target.id.length - 1] === "2") {
        if (index === 1) {
          playerInfo.name = e.target.value;
          return playerInfo
        } else {
          return playerInfo
        }
      }
    })
    updatePlayers(updatedNames)
  }

  function handleColorChange (e) {
    let playerToChangeColor = Number(e.target.className[e.target.className.length - 1])
    let colorPicked = e.target.style.backgroundColor
    let updatedColors = players.map((playerInfo, index) => {
      if (index + 1 === playerToChangeColor) {
        playerInfo.color = colorPicked;
        return playerInfo;
      } else {
        return playerInfo;
      }
    })
    if (playerToChangeColor === 1) {
      let oldColor = document.getElementById(colorHasBeenChosen[1])
      oldColor.style.border = ""
      e.target.style.border = "0.2em solid black"
      let updatedColorInfo = {...colorHasBeenChosen, 1: e.target.id}
      setColorHasBeenChosen(updatedColorInfo)
    }
    if (playerToChangeColor === 2) {
      let oldColor = document.getElementById(colorHasBeenChosen[2])
      oldColor.style.border = ""
      e.target.style.border = "0.2em solid black"
      let updatedColorInfo = {...colorHasBeenChosen, 2: e.target.id}
      setColorHasBeenChosen(updatedColorInfo)
    }
    updatePlayers(updatedColors)
  }

  return (
    <Container sx={gameSetupContainerCss} >
      {showRulesModal ? <Rules setShowRulesModal={setShowRulesModal}/> : null}
      <div className="player-setup-container">
        <div className="player-setup">
          <div className="player-name-container">
            <h2>{players[0].name ? players[0].name : "\xa0"}</h2>
            <NameTextInput placeholder="change name" onChange={handleNameChange} id="player-1" sx={{marginBottom: "2vh", width: "15em"}} error={false}/>
          </div>
          <Paper sx={colorSelectorContainerCss} elevation={3}>
            <div className="color-selector-column">
              <div className="circle-1" style={{backgroundColor: "#f23224", border: "0.2em solid black"}} onClick={handleColorChange} id="1" ></div>
              <div className="circle-1" style={{backgroundColor: "#F09811"}} onClick={handleColorChange} id="2" ></div>
              <div className="circle-1" style={{backgroundColor: "#F1F650"}} onClick={handleColorChange} id="3" ></div>
            </div>
            <div className="color-selector-column">
              <div className="circle-1" style={{backgroundColor: "#1FF011"}} onClick={handleColorChange} id="4" ></div>
              <div className="circle-1" style={{backgroundColor: "#11B3F0"}} onClick={handleColorChange} id="5" ></div>
              <div className="circle-1" style={{backgroundColor: "#112CF0"}} onClick={handleColorChange} id="6" ></div>
            </div>
            <div className="color-selector-column">
              <div className="circle-1" style={{backgroundColor: "#8711F0"}} onClick={handleColorChange} id="7" ></div>
              <div className="circle-1" style={{backgroundColor: "#F011D5"}} onClick={handleColorChange} id="8" ></div>
              <div className="circle-1" style={{backgroundColor: "#F01165"}} onClick={handleColorChange} id="9" ></div>
            </div>
          </Paper>
        </div>
        <Button onClick={handleGameStart} variant="contained" color="fourth" className="start-btn" sx={{fontFamily: '"Press Start 2P", "sans-serif"', fontSize: "1em", height: "7em", width: "10em", zIndex: "0"}} >start</Button>
        <div className="player-setup">
          <div className="player-name-container">
            <h2>{players[1].name ? players[1].name : "\xa0"}</h2>
            <NameTextInput placeholder="change name" name={players[1].name} onChange={handleNameChange} id="player-2" sx={{marginBottom: "2vh", width: "15em"}} error={false}/>
          </div>
          <Paper sx={colorSelectorContainerCss} elevation={3} >
            <div className="color-selector-column">
              <div className="circle-2" style={{backgroundColor: "#f23224"}} onClick={handleColorChange} id="10" ></div>
              <div className="circle-2" style={{backgroundColor: "#F09811"}} onClick={handleColorChange} id="11" ></div>
              <div className="circle-2" style={{backgroundColor: "#F1F650"}} onClick={handleColorChange} id="12" ></div>
            </div>
            <div className="color-selector-column">
              <div className="circle-2" style={{backgroundColor: "#1FF011", border: "0.2em solid black"}} onClick={handleColorChange} id="13" ></div>
              <div className="circle-2" style={{backgroundColor: "#11B3F0"}} onClick={handleColorChange} id="14" ></div>
              <div className="circle-2" style={{backgroundColor: "#112CF0"}} onClick={handleColorChange} id="15" ></div>
            </div>
            <div className="color-selector-column">
              <div className="circle-2" style={{backgroundColor: "#8711F0"}} onClick={handleColorChange} id="16" ></div>
              <div className="circle-2" style={{backgroundColor: "#F011D5"}} onClick={handleColorChange} id="17" ></div>
              <div className="circle-2" style={{backgroundColor: "#F01165"}} onClick={handleColorChange} id="18" ></div>
            </div>
          </Paper>
        </div>
      </div>
      <Button variant="outlined" sx={rulesBtnCss} onClick={handleOpenRules}>?</Button>
      <Rules openRules={openRules} handleCloseRules={handleCloseRules}/>
    </Container>
  )
}
