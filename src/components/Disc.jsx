import '/src/styles/Disc.css'

export default function Disc ({columnIndex, rowIndex, discValue, players, playerWin, handleDiscPlacement, }) {


  let discStyle = {};
  const discId = columnIndex.toString() + rowIndex.toString();

  if (discValue === 1) {
    discStyle.backgroundColor = players[0].color
    if (playerWin && playerWin.line) {
      for (let i = 0; i < playerWin.line.length; i++) {
        if (playerWin.line[i][0] === columnIndex && playerWin.line[i][1] === rowIndex) {
          discStyle.border = "2px solid black"
        }
      }
    }
    return (
      <div className="disc-container">
        <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle"></div>
      </div>
    )
  } else if (discValue === 2) {
    discStyle.backgroundColor = players[1].color
    if (playerWin && playerWin.line) {
      for (let i = 0; i < playerWin.line.length; i++) {
        if (playerWin.line[i][0] === columnIndex && playerWin.line[i][1] === rowIndex) {
          discStyle.border = "2px solid black"
        }
      }
    }
    return (
      <div className="disc-container">
        <div onClick={handleDiscPlacement} style={discStyle} id={discId} className="circle"></div>
      </div>
    )
  } else {
    return (
      <div className="disc-container">
        <div onClick={handleDiscPlacement} id={discId} className="circle"></div>
      </div>
    )
  }
}