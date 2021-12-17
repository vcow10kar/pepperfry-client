import styles from './itemDetails.module.css';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


export const ItemDetails = () => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleSub = () => {
        if (count == 0) {
            return;
        }
        const newCount = count - 1;
        setCount(newCount)
    }

const data = [{
    _id:"61b869b56d72ac648c13625b",
    name:"Rome Sofa Set (3+2) in Green Colour",
    price:70400,
    brand:"ARRA",
    dimensitions:"3 Seater : H 34 x W 68 x D 31; 2 Seater H 34 x W 49 x D 31 Seating Hei...",
    weight:"41.8 KG",
    warranty:"12 Months' Warranty",
    assembly:"Carpenter Assembly",
    primary_materials:"Velvet Fabric",
    room_type:"Living Room",
    seating_height:"16.5",
    colour:"Green",
    sku:"FN1855139-S-PM33832",
    image:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/rome-3-seater-in-green-colour-by-arra-rome-3-seater-in-green-colour-by-arra-ktywsr.jpg",
}]
  

    return (
        <div>
            <div className={styles.cont}>
                {
                    data.map((e) => (
                    <>
                        <div key={e._id}className={styles.img_div}>
                            <img src={e.image} className={styles.image} alt='logo' />
                        </div>    
                            <div className={styles.content}>
                                <h3 className={styles.title}>
                                    {e.name }
                                </h3>
                                <p className={styles.warrenty}>
                                    {
                                        e.warranty
                                    },100% Genuine
                                </p>
                                <div className={styles.delivery}>
                                    <div className={styles.calender}> {<CalendarViewMonthIcon />}
                                    </div>
                                    <div className={styles.delivery_code}>
                                        <p className={styles.del}>Delivered by</p>
                                        <p className={styles.detail}>Enter you pincode above to get these details</p>
                                    </div>
                                </div>
                            </div>
                             <div className={styles.quantity}>
                                <div className={styles.counter}>
                                    <div className={styles.counter_box}>
                                        <button onClick={ handleSub}className={styles.sub}>-</button>
                                            <div className={styles.count_box}>
                                            {
                                                count
                                                    }
                                            </div>
                                        
                                        <button onClick={ handleAdd} className={styles.add}>+</button>
                                    </div>
                                    <div className={styles.price}>
                                        <p className={styles.priceline}>
                                            <div className={styles.curr}>₹ 48,999</div>
                                            <div className={styles.actualcurr}>₹ 46,699</div>    
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.dustbin}>
                                    <svg className={styles.icon}>
                                        <path d= "M5.11754 12.873V5.1073C5.11754 4.86542 4.93981 4.66963 4.72081 4.66963C4.50182 4.66963 4.32408 4.86542 4.32408 5.1073V12.873C4.32408 13.1149 4.50182 13.3107 4.72081 13.3107C4.93981 13.3107 5.11754 13.1149 5.11754 12.873ZM7.67671 12.873V5.1073C7.67671 4.86542 7.49897 4.66963 7.27998 4.66963C7.06099 4.66963 6.88325 4.86542 6.88325 5.1073V12.873C6.88325 13.1149 7.06099 13.3107 7.27998 13.3107C7.49897 13.3107 7.67671 13.1149 7.67671 12.873ZM10.3567 4.66963C10.1378 4.66963 9.96002 4.86542 9.96002 5.1073V14.4862C9.96002 14.8381 9.70109 15.1247 9.38238 15.1247H2.61894C2.29997 15.1247 2.04025 14.8384 2.04025 14.4862V5.1073C2.04025 4.86542 1.86251 4.66963 1.64352 4.66963C1.42452 4.66963 1.24679 4.86542 1.24679 5.1073V14.4862C1.24679 15.3207 1.86225 16 2.61894 16H9.38238C10.1383 16 10.7535 15.321 10.7535 14.4862V5.1073C10.7535 4.86542 10.5757 4.66963 10.3567 4.66963ZM11.6033 2.73951H8.89626V0.437669C8.89626 0.195784 8.71852 0 8.49953 0H3.5018C3.2828 0 3.10507 0.195784 3.10507 0.437669V2.73951H0.396729C0.177735 2.73951 0 2.9353 0 3.17718C0 3.41907 0.177735 3.61485 0.396729 3.61485H11.6033C11.8223 3.61485 12 3.41907 12 3.17718C12 2.9353 11.8223 2.73951 11.6033 2.73951ZM8.1028 2.73951H3.89853V0.875337H8.1028V2.73951Z"/></svg>   
                                    <div className={styles.whishlist}>
                                    <FavoriteBorderOutlinedIcon/>
                                    </div>                                                    
                                </div>
                                </div>
                    </>
                    ))
                    
                }

                {/* Right Section Started */}
                <div className={styles.right}>


                    <div className={styles.topBorder}>
                        <h1 className={styles.login}>
                            Login OR Register
                        </h1>
                         <p className={styles.lines}>
                            For Express Checkout , Exciting Offers & More.
                            </p>
                    </div>



                    <div className={styles.topBorder_dist}>
                     <img src="/icons/apply_discount.svg" className={styles.distIcons} />
                     <p className={styles.coupen}>Apply Coupens</p>
                     <img className={styles.arrow_svg} src='/icons/arrow.svg'/>   
                    </div>



                    <div className={styles.top}>
                    <div className={styles.topBorder_1} >
                        <div className={styles.curr_val}>Cart Value</div>
                        <div className={styles.curr_prc}>₹ 48,999</div>
                    </div>
                    <div className={styles.topBorder_1}>
                        <div className={styles.curr_val_dist}>Retail Value</div>
                        <div className={styles.curr_prc_dist}>(-)₹ 2,300</div>
                    </div>
                     <div className={styles.topBorder_1}>
                        <div className={styles.curr_val}>GivenIndia</div>
                        <div className={styles.curr_prc_donate}>₹99</div>
                        </div>
                     
                    <div className={styles.mess}>
                        <p className={styles.message}>
                            Delivery & Assembly Charges Extra. Enter Pincode To
                            Know
                        </p>
                        </div> 
                    </div>
                    




                    <div className={styles.total_outer}>
                    <div className={styles.total}>
                
                        <h1 className={styles.curr_val_total}>Total</h1>
                        <h1 className={styles.curr_prc_total}>₹ 46,699</h1>
                        </div>
                        <p className={styles.taxes}>(Inclusive of all taxes)</p>
                    </div>
                    



                    <div className={styles.emi_div}>
                        <p className={styles.emi_p}>No Cost EMI Starting
                            <span className={styles.emi_span}>₹7,800/PM</span>EMI Starting
                        <span className={styles.emi_span}>₹2,203/PM.</span></p>
                    </div>
                    



                    <div className={styles.gst_starts}>
                        <div className={styles.gst_inner_starts}>
                        <input className={ styles.chk}type='checkbox' />
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



                     <div className={styles.btn_div}>
                    <Button style={{width:"100%"}} disableElevation variant="contained">PLACE ORDER</Button>
                    </div>



                </div>
                
            </div>
            
        </div>
    )
}