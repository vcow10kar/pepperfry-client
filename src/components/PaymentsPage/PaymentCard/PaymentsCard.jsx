import styles from "./PaymentsCard.module.css"
import minus from "../../deliveryAddressPage/footerAssets/minus.svg"

import debit from "./Icons/debit.svg"
import credit from "./Icons/credit.svg"
import NetBank from "./Icons/internetBanking.svg"
import GiftCard from "./Icons/giftcard.svg"
import UPI from "./Icons/upi.svg"
import Wallet from "./Icons/wallet.svg"
import International from "./Icons/international.svg"
import EMI from "./Icons/emi.svg"
import Money from "./Icons/money.svg"

import { DebitCardPayments } from "./DebitCard"
import { useState } from "react"


export const PaymentsCard = () => {

    const [buttonState, setButtonState] = useState ([0,0,0,0,0,0,0,0,1])

    const handleOnClick = (index)=>{
        console.log(index);
    }

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
                <button className={styles.payButtons} onClick={()=>{handleOnClick(0)}}>
                    <img src={debit} />
                    <div style={{marginLeft:"16px"}}>ATM/DEBIT CARD</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(1)}}>
                    <img src={Money} alt="dd" />
                    <div style={{marginLeft:"16px"}}>CARDLESS EMI/PAYLATER</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(2)}}>
                    <img src={credit} />
                    <div style={{marginLeft:"16px"}}>CREDIT card</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(3)}}>
                    <img src={EMI} alt="dd" />
                    <div style={{marginLeft:"16px"}}>EMI</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(4)}}>
                    <img src={NetBank} alt="dd" />
                    <div style={{marginLeft:"16px"}}>INTERNET BANKING</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(5)}}>
                    <img src={GiftCard} alt="dd" />
                    <div style={{marginLeft:"16px"}}>PEPPERFRY GIFT CARD</div>
                </button>
                
                <button className={styles.payButtons} onClick={()=>{handleOnClick(6)}}>
                    <img src={UPI} alt="dd" />
                    <div style={{marginLeft:"16px"}}>GOOGLE PAY/UPI</div>
                </button>

                <button className={styles.payButtons} onClick={()=>{handleOnClick(7)}}>
                    <img src={Wallet} alt="dd" />
                    <div style={{marginLeft:"16px"}}>WALLET</div>
                </button>

                <button className={styles.payButtons } onClick={()=>{handleOnClick(8)}}>
                    <img src={International} alt="dd" />
                    <div style={{marginLeft:"16px"}}>INTERNATIONAL CARDS</div>
                </button>
            </div>

            <DebitCardPayments />

        </div>
    </div>
}