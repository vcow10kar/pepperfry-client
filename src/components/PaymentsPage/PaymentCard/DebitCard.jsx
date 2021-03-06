import styles from "./PaymentsCard.module.css"
import { Box } from "./PaymentBox"
import visaCard from "../../deliveryAddressPage/footerAssets/visa.svg"
import rupay from "../../deliveryAddressPage/footerAssets/rupay.svg"
import masteroRed from "../../deliveryAddressPage/footerAssets/redYellow.svg"
import masteroBlue from "../../deliveryAddressPage/footerAssets/blueRed.svg"
import { useState, useEffect } from "react"
import { Button } from "@mui/material";
import { padding } from "@mui/system"
import { Link } from "react-router-dom"
// import { DebitCardPayments } from "./DebitCard"


export const DebitCardPayments = ({ data }) => {
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
        setTotalValue(totalVal);
    }

    useEffect(() => {
        getPriceDetails();
    }, data);

    const [buttonState, setButtonState] = useState(true);
    const [box1C, setB1C] = useState(false);
    const [box2C, setB2C] = useState(false);
    const [box3C, setB3C] = useState(false);
    const [box4C, setB4C] = useState(false);

    const handleOnChange1 = () => {
        setB1C(true)
        setB2C(false)
        setB3C(false)
        setB4C(false)
        setButtonState(false)

    }

    const handleOnChange2 = () => {
        setB1C(false)
        setB2C(true)
        setB3C(false)
        setB4C(false)
        setButtonState(false)


    }
    const handleOnChange3 = () => {
        setB1C(false)
        setB2C(false)
        setB3C(true)
        setB4C(false)
        setButtonState(false)


    }
    const handleOnChange4 = () => {
        setB1C(false)
        setB2C(false)
        setB3C(false)
        setB4C(true)
        setButtonState(false)


    }

    return <div className={styles.displayFlexColumn}>

        <div className={styles.font}>CHOOSE YOUR DEBIT CARD TYPE</div>

        <div >
            <div className={styles.displayFlexRow}>
                <div style={{ marginRight: '40px' }}> <Box card={masteroRed} ischecked={box1C} handleOnChange={handleOnChange1} /></div>
                <div> <Box card={rupay} ischecked={box2C} handleOnChange={handleOnChange2} /></div>

            </div>
            <div className={styles.displayFlexRow}>
                <div style={{ marginRight: '40px' }}> <Box card={visaCard} ischecked={box3C} handleOnChange={handleOnChange3} /></div>
                <div> <Box card={masteroBlue} ischecked={box4C} handleOnChange={handleOnChange4} /></div>
            </div>


        </div>

        <div>
            {/* <button className={styles.button} disabled={buttonState?true:false} onClick={()=>{console.log('llll');}}>PROCEED TO PAY ???{totalValue.toLocaleString('en-IN')} </button> */}
            <Link to="/paymentgateway">
                <Button style={{ display: "flex", margin: "0px" }} sx={{ fontSize: '18px' }} disabled={buttonState ? true : false} variant="contained" disableElevation onClick={() => { console.log('llll'); }}>PROCEED TO PAY ???{totalValue.toLocaleString('en-IN')}</Button>
            </Link>
        </div>

        <div className={styles.light}>Note : You will be asked to enter your card details  on
            proceeding with the selected payment options.</div>
    </div>
}