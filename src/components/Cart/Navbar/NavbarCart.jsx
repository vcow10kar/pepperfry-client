import styles from './navbar.module.css';

export const NavbarCart = () => {
    return (
        <div className={styles.navParent}>
            <div className={styles.nav}>
                <img src='./icons/navbarCart.svg' alt = 'cartIcon' className={styles.web_img} />
                <div className = {styles.breadcrumbDiv}>
                    <h2 className={styles.cart}>Cart------></h2>
                    <h2 className={styles.del}>Delivery & Billing Address------></h2>
                    <h2 className={styles.payment}>Payment------></h2>
                </div>
                <img src='./icons/Bell.svg' alt='icon_bell' className={styles.bell} />
            </div>
        </div>

    )
}