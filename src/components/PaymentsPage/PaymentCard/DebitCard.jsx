import styles from "./PaymentsCard.module.css"
import { Box } from "./PaymentBox"
import visaCard from "../../deliveryAddressPage/footerAssets/visa.svg"
import rupay from "../../deliveryAddressPage/footerAssets/rupay.svg"
import masteroRed from "../../deliveryAddressPage/footerAssets/redYellow.svg"
import masteroBlue from "../../deliveryAddressPage/footerAssets/blueRed.svg"
import { useState } from "react"
// import { DebitCardPayments } from "./DebitCard"


export const DebitCardPayments = () =>{
    
    const [box1C,setB1C] = useState(false);
    const [box2C,setB2C] = useState(false);
    const [box3C,setB3C] = useState(false);
    const [box4C,setB4C] = useState(false);

    const handleOnChange1 = ()=>{
        setB1C(true)
        setB2C(false)
        setB3C(false)
        setB4C(false)

    }

    const handleOnChange2 = ()=>{
        setB1C(false)
        setB2C(true)
        setB3C(false)
        setB4C(false)

    }
    const handleOnChange3 = ()=>{
        setB1C(false)
        setB2C(false)
        setB3C(true)
        setB4C(false)

    }
    const handleOnChange4 = ()=>{
        setB1C(false)
        setB2C(false)
        setB3C(false)
        setB4C(true)

    }

    return<div className={styles.displayFlexColumn}>

                <div className={styles.font}>CHOOSE YOUR DEBIT CARD TYPE</div>

                <div >
                    <div className={styles.displayFlexRow}>
                        <div style={{marginRight:'40px'}}> <Box card={masteroRed} ischecked={box1C} handleOnChange={handleOnChange1}/></div>
                        <div> <Box card={rupay} ischecked={box2C} handleOnChange={handleOnChange2}/></div>
                   
                    </div>
                    <div className={styles.displayFlexRow}>
                        <div style={{marginRight:'40px'}}> <Box card={visaCard} ischecked={box3C} handleOnChange={handleOnChange3}/></div>
                        <div> <Box card={masteroBlue} ischecked={box4C} handleOnChange={handleOnChange4}/></div>
                    </div>
                    
                    
                </div>

                <div>
                    <button className={styles.button}>PROCEED TO PAY ₹48,999 </button>
                </div>

                <div className={styles.light}>Note : You will be asked to enter your card details  on
                    proceeding with the selected payment options.</div>
            </div>
}