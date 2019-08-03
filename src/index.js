import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { grey, brown } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
            light: grey[400],
            dark: grey[400]
        },
        secondary: {
            main: brown[900],
            light: brown[400],
            dark: brown[400]
        },
        
    }
});

console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
