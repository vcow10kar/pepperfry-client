import styles from "./OrderSummery.module.css"
import plus from "../../deliveryAddressPage/footerAssets/plus.svg"
export const OrderSummeryCard = () => {
    return <div className={styles.card}>
        <div>ORDER SUMMARY</div>
        <div>
            <div>(1 items)   <img src={plus} alt="plus"/></div>
            
        </div>
    </div>
}