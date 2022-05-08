import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



ReactDOM.render(
<BrowserRouter>
 
    <App />
   
    </BrowserRouter>,
  document.getElementById('root')
);

