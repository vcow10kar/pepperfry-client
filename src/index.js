import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import customTheme from './utils/theme';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
