import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {
  return (
    <div>
      <div>
        <Button disableElevation variant="contained">ADD TO CART</Button>
      </div>

      <br />
      <Button disableElevation variant="contained" startIcon={<ArrowForwardIcon />}>GO TO CART</Button>

    </div>
  );
}

export default App;
