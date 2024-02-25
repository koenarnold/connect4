import {useState} from 'react'
import '/src/styles/Setup.css'
import Rules from '/src/components/Rules'

export default function Setup ({setPage, players, updatePlayers}) {

  const [showRulesModal, setShowRulesModal] = useState(false)

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
    // e.target.className[e.target.className.length - 1]
    let playerToChangeColor = Number(e.target.className[e.target.className.length - 1])
    let colorChosen = e.target.style.backgroundColor
    let updatedColors = players.map((playerInfo, index) => {
      if (index + 1 === playerToChangeColor) {
        playerInfo.color = colorChosen;
        return playerInfo;
      } else {
        return playerInfo;
      }
    })
    e.target.style.border = "2px solid black"
    updatePlayers(updatedColors)
    console.log(players)
  }

  return (
    <div>
      <h1>Game Setup</h1>
      <button onClick={()=>{setPage(1)}}>board</button>
      <button onClick={()=>{setShowRulesModal(!showRulesModal)}}>RULES</button>
      {showRulesModal ? <Rules /> : null}
      <div className="player-setup-container">
        <div className="player-setup">
          <h2>{players[0].name}</h2>
          <input type="text" onChange={handleNameChange} style={{marginBottom: "5vh"}} id="player-1"/>
          <div className="color-selector-container">
            <div className="circle-1" style={{backgroundColor: "#f23224"}} onClick={handleColorChange} ></div>
            <div className="circle-1" style={{backgroundColor: "#5099F6"}} onClick={handleColorChange}></div>
            <div className="circle-1" style={{backgroundColor: "#F1F650"}} onClick={handleColorChange}></div>
            <div className="circle-1" style={{backgroundColor: "#69F650"}} onClick={handleColorChange}></div>
            <div className="circle-1" style={{backgroundColor: "#c619e0"}} onClick={handleColorChange}></div>
            <div className="circle-1" style={{backgroundColor: "#F650DF"}} onClick={handleColorChange}></div>
          </div>
        </div>
        <div className="player-setup">
          <h2>{players[1].name}</h2>
          <input type="text" onChange={handleNameChange} style={{marginBottom: "5vh"}} id="player-2"/>
          <div className="color-selector-container">
          <div className="circle-2" style={{backgroundColor: "#f23224"}} onClick={handleColorChange}></div>
            <div className="circle-2" style={{backgroundColor: "#5099F6"}} onClick={handleColorChange}></div>
            <div className="circle-2" style={{backgroundColor: "#F1F650"}} onClick={handleColorChange}></div>
            <div className="circle-2" style={{backgroundColor: "#69F650"}} onClick={handleColorChange}></div>
            <div className="circle-2" style={{backgroundColor: "#c619e0"}} onClick={handleColorChange}></div>
            <div className="circle-2" style={{backgroundColor: "#F650DF"}} onClick={handleColorChange}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
