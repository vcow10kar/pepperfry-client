import { CardHolder } from "./CardHolder/CardHolder"
import { ItemDetails } from "./Item_Detail/ItemDetails"
import { NavbarCart } from "./Navbar/NavbarCart"
import styles from './main.module.css';


export const Main = () => {
    return (
        <div className={styles.outer_most_div}>
            <NavbarCart />
            <div className={styles.inner_div}>
                <CardHolder />
                <ItemDetails />
            </div>
        </div>
    )
} 