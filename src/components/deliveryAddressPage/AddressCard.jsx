import styles from "./addressCard.module.css"
import { Footer } from "./footer"
import { Form } from "./form"

export const AddressCard = () => {
    return <div className={styles.font}>
        <div className={styles.min}>
            <span>ORDER SUMMARY</span>
            <span>(1 items)<span> +</span></span>
        </div>
        <div className={styles.min}>
            <span>SHIPPING & BILLING DETAILS</span>
            <span>Tell us where to deliver<span> --</span></span>
        </div>
        <Form/>
        <Footer/>
        
    </div>
}