import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';


const NameTextInput = styled(TextField)({
  '& input': {
    color: 'white',
    fontFamily: '"Josefin Sans", "sans-serif"',
    backgroundColor: "#4B4455"
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App NameTextInput={NameTextInput}/>
  </React.StrictMode>,
)
