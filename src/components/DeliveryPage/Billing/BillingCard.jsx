import styles from "./BillingCard.module.css"
import minus from "../../deliveryAddressPage/footerAssets/minus.svg"
export const BillingCard = () => {
    return <div className={styles.card}>
        <div>SHIPPING & BILLING DETAILS</div>
        <div>
            <div>Tell us where to deliver <img src={minus} alt="plus"/></div>
            
        </div>
    </div>
}