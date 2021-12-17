import styles from './cardHolder.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const CardHolder = () => {
    return (
        <div>
            <div className={styles.cardHolder}>
                <div className={styles.location} >{<LocationOnOutlinedIcon />} </div>
                <input type="text" 
                    placeholder='Enter your pincode for delivery & assembly information'
                    className={styles.input}
                />
                <div className={styles.pincode_outer}>
                    <input className={styles.pincode} placeholder='Pincode' />
                    <button className={styles.btn}>Go</button>
                </div>
            </div>
        </div>
    )
}