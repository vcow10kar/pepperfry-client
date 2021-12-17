import styles from './left_items.module.css';

export const Left_Items = () => {
    return (
        <div className={styles.parent_div}>
            <img className={styles.image}
                src='https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/rome-3-seater-in-green-colour-by-arra-rome-3-seater-in-green-colour-by-arra-ktywsr.jpg' alt='' />
            <div className={styles.content}>
                <h3 className={styles.title}>Niki sofa set (3+2+1) in sea green colour by
                    Febonic</h3>
                <h4 className={styles.warrenty}>12 Months warranty, 100% Genuine</h4>
                <div className={styles.delivery}>
                    <img className={styles.calender}
                        src='/icons/Calender.svg' alt='' />
                    <p className={styles.del}>Delivery by</p>
                </div>
                <p className={styles.detail}>Enter your pincode above to get these
                    details</p>
            </div>
        </div>
    )
}