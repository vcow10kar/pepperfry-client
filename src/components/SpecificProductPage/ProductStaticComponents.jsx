import styles from './productStaticComponents.module.css';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const offers = [
    {
        offer: "ICICI Bank Debit & Credit Card",
        desc1: "Get Extra 10% off on ICICI Bank Credit & Debit Card,",
        desc2: "Maximum Discount Rs 3000",
        code: "ICICIPF10"
    },

    {
        offer: "ICICI Bank EMI",
        desc1: "Get Extra 10% off on EMI purchases through ICICI Bank Cards,",
        desc2: "Maximum Discount Rs 5000",
        code: "ICICIPFEMI10"
    },

    {
        offer: "IDFC FIRST Bank Debit & Credit Cards",
        desc1: "Get Extra 10% off on IDFC FIRST Bank Credit & Debit Cards,",
        desc2: "Maximum Discount Rs 1250",
        code: "IDFCPF10"
    }

]
const BankOffers = () => {
    return (
        <div className={styles.displayFlex}>
            <div className={styles.detailsDiv}>
                <p className={styles.subheading1}>Bank Offers</p>
            </div>

            <div className={styles.offerDiv}>
                {offers.map(item => {
                    return (
                        <div className={styles.eachOffer}>
                            <p className={styles.subheading2}>{item.offer}</p>
                            <p className={styles.bodyText}>{item.desc1}</p>
                            <p className={styles.bodyText}>{item.desc2}</p>
                            <p className={styles.bodyText}>Code: <span className={styles.bodyText1}>{item.code}</span></p>
                        </div>
                    )
                })}

                <p className={styles.blueBerryBlue}>See All Offers (5)</p>
            </div>


        </div>
    )
}

const Delivery = () => {
    return (
        <div className={styles.displayDeliveryFlex}>
            <div className={styles.detailsDiv}>
                <p className={styles.subheading1}>Delivery</p>
            </div>

            <div className={styles.deliveryDetailsDiv}>
                <div className={styles.pincodeInputDiv}>
                    <input type="number" placeholder='Pincode' max={999999} className={styles.pincodeInput} />
                    <p className={styles.subheading1}>Apply</p>
                </div>

                <div className={styles.deliveryPoints}>
                    <p className={styles.subheading1Grey}>Enter pincode to get Delivery Date, Assembly information other details</p>
                    <p className={styles.subheading2Black}>Delivery Date, Assembly Charge extra. Enter Pincode to know</p>
                </div>
            </div>

        </div>
    )
}

const EMIWarranty = () => {
    return (
        <div className={styles.displayEMIWarrantyFlex}>
            <div className={styles.displayDivFlex}>
                <img src="/icons/Calender.svg" className={styles.emiIcons} alt = "calender"/>
                {/* <EventRepeatOutlinedIcon sx = {{margin: 'auto', marginRight: '10px'}}/> */}
                <p style={{ color: '#14A9CC' }} className={styles.emiText}>EMI from 1,77 No Cost EMI</p>
            </div>

            <div className={styles.displayDivFlex}>
                <img src="/icons/Warranty.svg" className={styles.emiIcons} alt = "warranty"/>
                {/* <GppGoodOutlinedIcon sx={{ margin: 'auto', marginRight: '10px' }} /> */}
                <p className={styles.emiText}>12 Months' Warranty</p>
            </div>

            <div className={styles.displayDivFlex}>
                <img src="/icons/Rs_symbol.svg" className={styles.emiIcons} alt = "rupee symbol"/>
                {/* <CurrencyRupeeOutlinedIcon sx={{ margin: 'auto', marginRight: '10px' }} /> */}
                <p className={styles.emiText}>Easy Returns</p>
            </div>

            <div className={styles.displayDivFlex}>
                <img src="/icons/Truck_2_safety.svg" className={styles.emiIcons} alt = "delivery truck"/>
                {/* <LocalShippingOutlinedIcon sx={{ margin: 'auto', marginRight: '10px' }} /> */}
                <p className={styles.emiText}>Safe Delivery</p>
            </div>
        </div>
    )
}


export { BankOffers, Delivery, EMIWarranty };