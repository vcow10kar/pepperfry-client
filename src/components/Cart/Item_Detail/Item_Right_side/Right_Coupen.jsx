import styles from './right_coupen.module.css';

export const Right_Coupen = () => {
    return (
        <div className={styles.topBorder_dist}>
            <img src="/icons/apply_discount.svg" alt='' className={styles.distIcons} />
            <p className={styles.coupen}>Apply Coupens</p>
            <img className={styles.arrow_svg} alt='' src='/icons/arrow.svg' />
        </div>
    )
}