import { useState } from 'react'
import './styles/App.css'
import Setup from '/src/components/Setup'
import Board from '/src/components/Board'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

function App({NameTextInput}) {

  const [page, setPage] = useState(0)
  const [players, updatePlayers] = useState([{name: 'Player 1', color: "rgb(242, 50, 36)"},{name: 'Player 2', color: "rgb(31, 240, 17)"}])

  const theme = createTheme({
    palette: {
      primary: {main: "#8020FF"},
      secondary: {main: "#803FD5"},
      third: {main: "#764FAA"},
      fourth: {main: "#655080", contrastText: "#ffffff"},
      fifth: {main: "#4B4455", contrastText: "#ffffff"},
      sixth: {main: "#2E2B33"},
    }
  })

switch (page) {
  case 0:
    return (
      <ThemeProvider theme={theme}>
        <Setup setPage={setPage} players={players} updatePlayers={updatePlayers} theme={theme} NameTextInput={NameTextInput}/>
      </ThemeProvider>
    )
  case 1:
    return (
      <Board players={players} updatePlayers={updatePlayers} setPage={setPage} theme={theme}/>
    )
}

}

export default App
