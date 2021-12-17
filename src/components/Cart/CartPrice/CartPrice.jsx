import styles from "./CartPrice.module.css"


export const CartPrice = ({ data }) => {

    return <div className={styles.m}>
        <div className={styles.card}>
            <div className={styles.cardDisplay}>
                <div>Cart Value</div>
                <div>₹{ data.product.price * data.quantity}</div>
            </div>
            <div className={styles.cardDisplay}>
                <div style={{color:"green"}}>Retail Value</div>
                <div>(-)₹{Math.floor((data.product.price * data.quantity) - (Math.floor((data.product.price) * (data.product.discount_percentage / 100))) * data.quantity)}</div>
            </div>

            <div className={styles.cardDisplay}>
                <div>GiveIndia</div>
                <div>₹99</div>
            </div>

            <div className={styles.cardDisplay} style={{textAlign:"left",fontWeight:"normal",paddingTop:"10px"}}>Delivery & Assembly Charges Extra. Enter Pincode To
                Know</div>
        </div>
        <div className={styles.card1} >
            <div>Total</div>
            <div>
                <div className={styles.totalPrice}>₹{(Math.floor((data.product.price) * (data.product.discount_percentage / 100))) * data.quantity }</div>
                <div style={{ color: "#707070" }}>(Inclusive of all taxes)</div>
            </div>
        </div>
        <div className={styles.emi_div}>
            <p className={styles.emi_p}>No Cost EMI Starting
                <span className={styles.emi_span}>₹7,800/PM</span>EMI Starting
                <span className={styles.emi_span}>₹2,203/PM.</span></p>
        </div>
        
        <div className={styles.gst_starts}>
            <div className={styles.gst_inner_starts}>
                <input className={styles.chk} type='checkbox' />
                <div className={styles.gst_content}>Contribute Rs99 For COVID Relief Through GiveIndia</div>
            </div>
            <div className={styles.gst_inner_starts}>
                <input className={styles.chk} type='checkbox' />
                <div>
                    <h1 className={styles.gst_h1}>Use GSTIN For Business Purchase (Optional)</h1>
                    <div className={styles.gst_content1}>Claim Tax Credit By Entering Your Companies GSTIN.</div>
                </div>
            </div>
        </div>


    </div>
}