import styles from "./footer.module.css"

import blueRedCard from "./footerAssets/blueRed.svg"
import redYellowCard from "./footerAssets/redYellow.svg"
import visa from "./footerAssets/visa.svg"
import rupay from "./footerAssets/rupay.svg"
import dinesClub from "./footerAssets/dinesClub.svg"
import americanExpress from "./footerAssets/americanExpress.svg"
import verified from "./footerAssets/verified.svg"
import pci from "./footerAssets/pci.svg"
import wallet from "./footerAssets/wallet.svg"
import pc from "./footerAssets/pc.svg"
import calender from "./footerAssets/calender.svg"
// import verified from "./footerAssets/verified.svg"




export const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.main_div}>

            <div className={styles.sub_main}>
                <div className={styles.display}>
                    <img src={calender} alt="calender" />
                    <span style={{ marginLeft: "3px" }}>WE ACCEPT</span>
                </div>
                <div className={styles.display}>
                    <img src={visa} alt="visa" />
                    <img src={blueRedCard} alt="debit card" />
                    <img src={americanExpress} alt="americanExpress" />
                    <img src={dinesClub} alt="dinesClub" />
                    <img src={rupay} alt="rupay" />
                </div>
            </div>

            <div className={styles.sub_main}>

                <div className={styles.display} style={{alignItems:"start"}} >
                    <span><img src={calender} alt="calender" /></span>
                    <span style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "3px" }}>
                        <span> BUY SAFE , PAY SAFE </span>
                        <span><b> No Cost EMI’s :</b> Now pay in easy installments at</span>
                        <span> noadditional cost</span>
                    </span>

                </div>

            </div>

            <div className={styles.sub_main}>
                <div className={styles.display}>
                    <span><img src={calender} alt="calender" /></span>
                    <span>100% SAFE & SECURE</span>
                </div>
                <div>
                    <img src={verified} alt="verified" />
                    <img src={pci} alt="pci" />
                </div>

            </div>

            <div className={styles.sub_main}>
                <div className={styles.display} style={{fontSize:"12px"}}>

                    <span><img src={redYellowCard} alt="debit card" /></span>

                    <span style={{display:"flex",flexDirection:"column"}}>
                        <span><img src={wallet} alt="wallet" style={{ width: "20px", height: "16px" }} /></span>
                        <span>Wallets</span>
                    </span>


                    <span style={{display:"flex",flexDirection:"column"}}>
                        <span> <img src={pc} alt="pc" style={{ width: "40px", height: "35px" }} /></span>
                        <span>Internet Banking</span>
                    </span>

                </div>

            </div>

            <div className={styles.sub_main}>
                <div className={styles.display} style={{position:"relative",top:'67%',fontSize:"10px"}}>
                    <img src={calender} alt="calender" />
                    <span>Copyright 2021 pepperfry.com . All Rights Reserved</span>
                    {/* Copyright 2021 Pepperfry.com . All Rights Reserved . */}
                </div>
            </div>


            <div className={styles.sub_main}>

            </div>
        </div>
    </div>
}