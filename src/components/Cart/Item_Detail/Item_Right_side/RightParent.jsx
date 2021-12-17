import { Right_top } from './Right_top'; 
import styles from './rightParent.module.css';
import { Right_Coupen } from './Right_Coupen';
import { CartPrice } from '../../CartPrice/CartPrice';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export const RightParent = ({data}) => {
    let history = useHistory();

    const handlePlaceOrder = () => {
        history.push('/delivery');
    }
    return (
        <div className={styles.right}>
            <Right_top />
            <Right_Coupen />
            <CartPrice data = {data}/>
            <div className={styles.btn_div}>
                <Button style={{ width: "100%" }} disableElevation variant="contained" onClick={handlePlaceOrder}>PLACE ORDER</Button>
            </div>
        </div>
    )
}