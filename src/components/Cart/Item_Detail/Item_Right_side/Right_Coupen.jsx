import styles from './right_coupen.module.css';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

export const Right_Coupen = () => {
    return (
        <div className={styles.topBorder_dist}>
            <LocalActivityOutlinedIcon className={styles.distIcons} />
            <p className={styles.coupen}>Apply Coupon</p>
            <img className={styles.arrow_svg} alt='arrow' src='/icons/arrow.svg' />
        </div>
    )
}