import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
/*const theme = createMuiTheme({
  palette: {
      primary: {
          // light: will be calculated from palette.primary.main,
          light: '#ff5b36',
          main: '#ff0400',
          dark: '#c20000',
          contrastText: "#fafafa"
      },
      secondary: {
          light: '#ffff6b',
          main: '#fdd835',
          dark: '#c6a700',
          contrastText: '#000000'
      },
      lightGray: '#ebebeb'
      // error: will use the default color
  },
  typography: {
      fontFamily: [
          'AvenirNext',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
      ].join(','),
      useNextVariants: true
  },
  blackButtonRoot: {
      boxShadow: 'none',
      textTransform: 'none',
      background: 'black',
      fontSize: '1rem',
      padding: '8px 24px',

      '&:active': {
          boxShadow: 'none',
      },
      '&:hover': {
          background: 'black',
      },
  },
  overrides: {
      MuiInputAdornment: {
          root: {
              marginRight: "14px"
          }
      },
      MuiInputBase: {
          adornedEnd: {
              paddingRight: "0px !important"
          }
      },
      MuiOutlinedInput: {
          root: {
              fontSize: 20,
              fontWeight: '600',
              color: 'black'
          },
          focused: {
              // notchedOutline: {
              //     borderColor: `#ebebeb !important`,
              //     borderWidth: '1px',
              //     color: '#ebebeb'
              // },
              // "& $notchedOutline": {
              //     borderColor: `#ebebeb !important`,
              //     borderWidth: '1px',
              //     color: '#ebebeb'
              // }
          },
          notchedOutline: {
              borderWidth: '1px',
              borderColor: '#ebebeb !important'
          }
      },
      MuiInputLabel: {
          root: {
              color: '#999',
              fontSize: 20
          }

      },
    /*  MuiAppBar: {
          colorDefault: {
              backgroundColor: "white",
              color: '#999',
              boxShadow: 'none',
              borderBottom: '1px solid #ebebeb',
              zIndex: 1301
          }
      },
      MuiButton: {
          root: {
              textTransform: 'none',
              fontSize: 18
          }
      },
      MuiToolbar: {
          root: {
              justifyContent: 'center'
          }
      },
      MuiDialog: {
          root: {
              zIndex: 1302
          }
      }
  }
});
*/

ReactDOM.render(
  <
  MuiThemeProvider >
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
