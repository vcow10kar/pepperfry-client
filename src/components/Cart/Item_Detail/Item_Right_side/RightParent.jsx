import { Right_top } from './Right_top'; 
import styles from './rightParent.module.css';
import { Right_Coupen } from './Right_Coupen';
import { CartPrice } from '../../CartPrice/CartPrice';
import { Button } from '@mui/material';

export const RightParent = ({data}) => {
    return (
        <div className={styles.right}>
            <Right_top />
            <Right_Coupen />
            <CartPrice data={ data} />
            <div className={styles.btn_div}>
                <Button style={{ width: "100%" }} disableElevation variant="contained">PLACE ORDER</Button>
            </div>
        </div>
    )
}