import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import styles from "./CartPrice.module.css"
import Checkbox from '@mui/material/Checkbox';

export const CartPrice = ({ data }) => {

    // const [cart, setCart] = useState(data);
    const [cartValue, setCartValue] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const getPriceDetails = () => {
        let totalPrice = 0;
        let discountPrice = 0;
        let totalVal = 0;

        for (let i = 0; i < data.length; i++) {
            const actualPrice = data[i].product.price * data[i].quantity;
            totalPrice += actualPrice
            discountPrice += (actualPrice - Math.floor(actualPrice * (data[i].product.discount_percentage / 100)));
        }
        totalVal = totalPrice - discountPrice + 99;

        setCartValue(totalPrice);
        setDiscount(discountPrice);
        setTotalValue(totalVal);
    }

    useEffect(() => {
        getPriceDetails();
    }, data);

    return <div className={styles.m}>
        <div className={styles.card}>
            <div className={styles.cardDisplay}>
                <div>Cart Value</div>
                <div>₹ {cartValue.toLocaleString('en-IN')}</div>
            </div>
            <div className={styles.cardDisplay}>
                <div style={{ color: "green" }}>Retail Value</div>
                <div style={{ color: "green" }}>(-) ₹{discount.toLocaleString('en-IN')}</div>
            </div>

            <div className={styles.cardDisplay}>
                <div>GiveIndia</div>
                <div>₹99</div>
            </div>

            <div className={styles.cardDisplay} style={{ textAlign: "left", fontWeight: "normal" }}>Delivery & Assembly Charges Extra. Enter Pincode To
                Know</div>
        </div>
        <div className={styles.card1} >
            <div>Total</div>
            <div>
                <div className={styles.totalPrice}>₹{totalValue.toLocaleString('en-IN')}</div>
                <div style={{ color: "#707070" }}>(Inclusive of all taxes)</div>
            </div>
        </div>
        <div className={styles.emi_div}>
            <p className={styles.emi_p}>No Cost EMI Starting <span className={styles.emi_span}>₹7,800/PM</span> EMI Starting <span className={styles.emi_span}>₹2,203/PM.</span></p>
        </div>

        <div className={styles.gst_starts}>
            <div className={styles.gst_inner_starts}>
                <Checkbox size="large" sx={{ padding: '0px 9px 0px 0px' }} />
                <div className={styles.gst_content}>Contribute Rs99 For COVID Relief Through GiveIndia</div>
            </div>
            <div className={styles.gst_inner_starts}>
                <Checkbox size="large" sx={{ padding: '0px 9px 0px 0px' }} />
                <div>
                    <h1 className={styles.gst_h1}>Use GSTIN For Business Purchase (Optional)</h1>
                    <div className={styles.gst_content1}>Claim Tax Credit By Entering Your Companies GSTIN.</div>
                </div>
            </div>
        </div>


    </div>
}