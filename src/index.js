import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import customTheme from './utils/theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
