import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-lora'
import 'typeface-karla'

const hCommons = {
  fontFamily: 'Lora, sans-serif',
  color: '#222228',
  fontWeight: '400'
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#f7f7f5'
    }
  },
  typography: {
    h1: {
      ...hCommons,
      marginBottom: '10px',
      fontSize: '27px',
      lineHeight: '39px',
      letterSpacing: '-0.75px'
    },
    h2: {
      ...hCommons,
      margin: '10px 0 5px 0',
      fontSize: '23.5px',
      lineHeight: '34.5px'
    },
    h3: {
      ...hCommons,
      margin: '10px 0 10px 0',
      fontSize: '18px',
      lineHeight: '29px',
      fontStyle: 'italic'
    },
    h4: {
      ...hCommons,
      margin: '10px 0 10px 0',
      fontSize: '16.5px',
      lineHeight: '27.5px',
      fontStyle: 'italic'
    },
    h5: {
      ...hCommons,
      margin: '10px 0 10px 0',
      fontSize: '14px',
      lineHeight: '20px'
    },
    h6: {
      ...hCommons,
      margin: '10px 0 10px 0',
      fontSize: '12px',
      lineHeight: '23px'
    },
    body1: {
      margin: '10px 0 5px 0',
      fontFamily: 'Karla, sans-serif',
      color: '#66666a',
      fontSize: '15px',
      lineHeight: '22.5px'
    }
  }
})

export default theme
