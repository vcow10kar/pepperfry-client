import { Button } from '@mui/material';
import styles from './buttons.module.css';


const ButtonsDiv = ({text, handleClick, icon}) => {
    const handleButtonClick = () => {
        handleClick();
    }
    return (
        <Button sx = {{backgroundColor: '#f16521'}} startIcon = {icon ? icon : null} onClick={handleButtonClick} >{text}</Button>
    )
}

export {ButtonsDiv};

