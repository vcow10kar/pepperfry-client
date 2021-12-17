import styles from "./BillingCard.module.css"
import plus from "../../deliveryAddressPage/footerAssets/plus.svg"
export const BillingCard = () => {
    return <div className={styles.card}>

        <div className={styles.outsideCard}>
            <div>SHIPPING & BILLING DETAILS</div>
            <div className={styles.insideCard}>
                <div>Name</div>
                <div>Address</div>
                <div>City-Pincode</div>
                <div>State</div>
                <div>Mobile Number</div>
            </div>
        </div>

        <div className={styles.outsideCard}>
            <div className={styles.display}>
                <div className={styles.outsideCard} >BILLING ADDRESS</div>
                <img src={plus}/>
            </div>

            <div className={styles.insideCard}>
                <div>Name</div>
                <div>Address</div>
                <div>City-Pincode</div>
                <div>State</div>
                <div>Mobile Number</div>
            </div>
        </div>
    </div>
}