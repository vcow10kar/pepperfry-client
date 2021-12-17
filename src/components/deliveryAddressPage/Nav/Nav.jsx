import styles from "./Nav.module.css"
import logo from "./logo.svg"
import bell from "./bell.svg"
export const NavBar = () => {
    return <div className={styles.nav}>
            <NavBar/>
            <div>
            <img src={logo} />
            </div>
            
            <div>
                <span>cart------</span>
                <span>Delivery & Billing Address------</span>
                <span>Payment------</span>
            </div>
            <div className={styles.display}>
                <div>WELCOME USER</div>
                <img src={bell} />
            </div>

    </div>
}