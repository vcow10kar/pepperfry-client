import styles from "./BillingCard.module.css"
import plus from "../../deliveryAddressPage/footerAssets/plus.svg"
import { useSelector } from "react-redux"
export const BillingCard = () => {
    const { address } = useSelector(state => (state.cart));

    return <div className={styles.card}>

        <div className={styles.outsideCard}>
            <div>SHIPPING & BILLING DETAILS</div>
            <div className={styles.insideCard}>
                <div>{address.name.toUpperCase()}</div>
                <div>{address.address}</div>
                <div>{address.city} - {address.pincode}</div>
                <div>{address.state}</div>
                <div>M: {address.phoneNo}</div>
            </div>
        </div>

        <div className={styles.outsideCard}>
            <div className={styles.display}>
                <div className={styles.outsideCard} >BILLING ADDRESS</div>
            </div>

            <div className={styles.insideCard}>
                <div>{address.name.toUpperCase()}</div>
                <div>{address.address}</div>
                <div>{address.city} - {address.pincode}</div>
                <div>{address.state}</div>
                <div>M: {address.phoneNo}</div>
            </div>
        </div>
    </div>
}