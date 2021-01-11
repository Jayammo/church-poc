import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {teal, green, red} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
    error: red,
    background: {
      paper: '#FFF'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
