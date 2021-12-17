import { CardHolder } from "./CardHolder/CardHolder"
import { ItemDetails } from "./Item_Detail/ItemDetails"
import { NavbarCart } from "./Navbar/NavbarCart"
import styles from './main.module.css';
import { useSelector, useDispatch } from "react-redux";
import LeftItemParent from "./Item_Detail/Item_left_side/LeftItemParent";
import { RightParent } from "./Item_Detail/Item_Right_side/RightParent";


export const Main = () => {
    const { cart } = useSelector(state => state.cart);

    return (
        <div className={styles.outer_most_div}>
            <NavbarCart />
            <div className={styles.contents}>
            <div className={styles.inner_div}>
                <CardHolder />
                {/* <ItemDetails /> */}

                <div>
                    {cart.length > 0 ?
                        
                            cart.map(item => {
                                return <LeftItemParent data={item} />
                            })
                         : 

                        <h2>Cart is empty!</h2>
                    }

                    </div>
                </div>
                <RightParent />

                
            </div>
            
        </div>
    )
} 