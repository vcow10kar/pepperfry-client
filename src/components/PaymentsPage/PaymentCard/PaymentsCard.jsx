import styles from "./PaymentsCard.module.css"
import minus from "../../deliveryAddressPage/footerAssets/minus.svg"

import debit from "./Icons/debit.svg"
import credit from "./Icons/credit.svg"
import { Box } from "./PaymentBox"
import visaCard from "../../deliveryAddressPage/footerAssets/visa.svg"
import rupay from "../../deliveryAddressPage/footerAssets/rupay.svg"
import masteroRed from "../../deliveryAddressPage/footerAssets/redYellow.svg"
import masteroBlue from "../../deliveryAddressPage/footerAssets/blueRed.svg"
import { DebitCardPayments } from "./DebitCard"


export const PaymentsCard = () => {
    return <div className={styles.card}>

        <div className={styles.card1}>
            <div>PAYMENT</div>
            <div>
                <div>How would you like to pay <img src={minus} alt="plus" /></div>

            </div>
        </div>

        <div className={styles.box}>
            <div>SELECT PAYMENT METHOD</div>
        </div>



        <div className={styles.card2}>
            <div>
                <button className={styles.payButtons}>
                    <div>ATM/DEBIT CARD</div>
                </button>
                <button className={styles.payButtons}>
                    <div>CARDLESS EMI/PAYLATER</div>
                </button>
                <button className={styles.payButtons}>
                    <div>CREDIT card</div>
                </button>
                <button className={styles.payButtons}>
                    <div>EMI</div>
                </button>
                <button className={styles.payButtons}>
                    <div>INTERNET BANKING</div>
                </button>
                <button className={styles.payButtons}>
                    <div>PEPPERFRY GIFT CARD</div>
                </button>
                <button className={styles.payButtons}>
                    <div>GOOGLE PAY/UPI</div>
                </button>
                <button className={styles.payButtons}>
                    <div>WALLET</div>
                </button>
                <button className={styles.payButtons}>
                    <div>INTERNATIONAL CARDS</div>
                </button>
            </div>

            <DebitCardPayments/>

        </div>
    </div>
}