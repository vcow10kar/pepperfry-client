import { CardHolder } from "./CardHolder/CardHolder"
import { ItemDetails } from "./Item_Detail/ItemDetails"
import { NavbarCart } from "./Navbar/NavbarCart"


export const Main = () => {
    return (
        <div>
            <NavbarCart/>
            <CardHolder />
            <ItemDetails/>
        </div>
    )
} 