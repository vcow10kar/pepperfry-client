

export const Right_Price = () => {
    return (
        <div>
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
                {/* TOTAL PRICE SECTION */}
            <div className={styles.total_outer}>
                <div className={styles.total}>

                    <h1 className={styles.curr_val_total}>Total</h1>
                    <h1 className={styles.curr_prc_total}>₹ 46,699</h1>
                </div>
                <p className={styles.taxes}>(Inclusive of all taxes)</p>
            </div>
        </div>
    )
}