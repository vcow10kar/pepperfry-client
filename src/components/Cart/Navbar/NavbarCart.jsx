import styles from './navbar.module.css';

export const NavbarCart = () => {
    return (
        <div>
             <div>
            <div className={styles.nav}>
                <img src='./icons/navbarCart.svg' className={styles.web_img} />
                <h2 className={styles.cart}>cart------</h2>
                <h2 className={styles.del}>Delivery & Billing Address------</h2>
                <h2 className={styles.payment}>Payment------</h2>
                    <img src='./icons/bell.svg' className={styles.bell} />
                     <img src='./icons/bell_1.svg' className={styles.bell_1}/>
                </div>
            </div>
            
        </div>
    )
}