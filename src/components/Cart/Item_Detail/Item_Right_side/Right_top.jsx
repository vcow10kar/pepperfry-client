import styles from './right_top.module.css';

export const Right_top = () => {
    return (
        <div className={styles.topBorder}>
            <h1 className={styles.login}>
                Login OR Register
            </h1>
            <p className={styles.lines}>
                For Express Checkout , Exciting Offers & More.
            </p>
        </div>
    )
}