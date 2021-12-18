import styles from "./CartCard.module.css"
import pci from "../../deliveryAddressPage/footerAssets/pci.svg"
import verified from "../../deliveryAddressPage/footerAssets/verified.svg"

export const CartCard = () => {
    return <div className={styles.mainDiv}>
        {/* <div className={styles.card}>
            <div className={styles.cardDisplay}>
                <div>Cart Value</div>
                <div>₹48,999</div>
            </div>
            <div className={styles.cardDisplay}>
                <div style={{color:"green"}}>Retail Value</div>
                <div>(-)₹2,300</div>
            </div>
            <div className={styles.cardDisplay}>
                <div>Delivery</div>
                <div>₹0</div>
            </div>
            <div className={styles.cardDisplay}>
                <div>Assembly</div>
                <div>₹449</div>
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
                <div>₹48,999</div>
                <div style={{ color: "#707070" }}>(Inclusive of all taxes)</div>
            </div>
        </div>
        <div className={styles.font}>
            <span>No Cost EMI Starting</span>
            <span><u> ₹7,800/PM </u></span>
            <span> EMI Starting </span>
            <span><u> ₹2,203/PM.</u></span>
        </div>
        <div className={styles.display}>
            <input type="checkbox" style={{ height: "28px", width: "28px" }} />
            <div className={styles.contribution}>
                <div>Contribute Rs99 For COVID Relief Through</div>
                <div>GiveIndia</div>
            </div>
        </div> */}

        <div className={styles.bank}>
            <div >BANK OFFERS</div>
        </div>

        <div>
            <div className={styles.secureFont}>100% SAFE & SECURE</div>
            <div>
                <img src={verified} />
                <img src={pci} />
            </div>
        </div>

        <div className={styles.bank} style={{ border: "none", borderTop: "1px solid grey" }}>
            <div >Easy Returns</div>
        </div>


    </div>
}