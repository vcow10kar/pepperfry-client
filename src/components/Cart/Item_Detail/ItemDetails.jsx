import styles from './itemDetails.module.css';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { useState } from 'react';
import { Button } from '@mui/material';


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
                                    <img className={styles.dustbin_svg} src='/icons/dustbin.svg' />  
                                    <img className={styles.whishlist_svg} src='/icons/wishlist.svg' />  
                                    
                                                    
                                </div>
                                </div>
                    </>
                    ))
                    
                }

                {/* Right Section Started */}
                <div className={styles.right}>


                    <div className={styles.topBorder}>
                        <div className={styles.login}>
                            Login OR Register
                        </div>
                         <p className={styles.lines}>
                            For Express Checkout , Exciting Offers & More.
                            </p>
                    </div>



                    <div className={styles.topBorder}>
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