import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B4F6C',
    },
    secondary: {
      main: '#0F8A9D',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
})

theme = responsiveFontSizes(theme)

export default theme
