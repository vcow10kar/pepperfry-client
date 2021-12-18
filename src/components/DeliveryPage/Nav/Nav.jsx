import styles from "./Nav.module.css"
import logo from "./logo.svg"
import bell from "./bell.svg"
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
    const { user } = useSelector(state => state.login);
    return <div className={styles.nav}>
        <div>
            <img src={logo} />
        </div>

        <div>
            <span>Cart------</span>
            <span>Delivery & Billing Address------</span>
            <span style = {{color: 'black'}}>Payment------</span>
        </div>
        <div className={styles.display}>
            {user ?
                <div>WELCOME {user.displayName.firstName.toUpperCase()}!</div>
                : null
            }
            <img src={bell} />
        </div>

    </div>
}