import { CardHolder } from "./CardHolder/CardHolder"
import { ItemDetails } from "./Item_Detail/ItemDetails"
import { NavbarCart } from "./Navbar/NavbarCart"
import styles from './main.module.css';
import { useSelector, useDispatch } from "react-redux";
import LeftItemParent from "./Item_Detail/Item_left_side/LeftItemParent";
import { RightParent } from "./Item_Detail/Item_Right_side/RightParent";
import { useState } from "react";
import { Footer } from "../deliveryAddressPage/footer";
import { Link } from "react-router-dom";


export const Main = () => {
    const { cart } = useSelector(state => state.cart);

    // const [cartData, setCartData] = useState(cart);

    return (
        <div className={styles.outer_most_div}>
            <NavbarCart />
            <div className={styles.contents}>
                <div className={styles.inner_div}>
                    <CardHolder />

                    <div>
                        {cart.length > 0 ?

                            cart.map(item => {
                                return <LeftItemParent data={item} />
                            })
                            :
                            <div style={{ marginTop: '30px' }}>
                                <h1>Cart is empty!</h1>
                                <h2 className = {styles.continueShopping}>
                                    <Link to='/'>Continue Shopping...</Link>
                                </h2>
                            </div>  
                        }

                    </div>

                </div>

                {cart.length > 0 ?

                    <RightParent data={cart} /> : null}

            </div>

            <div className= {styles.footerDiv}>
                <Footer />
            </div>

        </div>
    )
} 