import styles from './left_items.module.css';

export const Left_Items = ({data}) => {
    console.log(data);
    return (
        <div className={styles.parent_div}>
            <img className={styles.image}
                src= {data.product.imagesArray[0]} alt='product' />
            <div className={styles.content}>
                <h3 className={styles.title}>{data.product.name}</h3>
                <h4 className={styles.warrenty}>12 Months warranty, 100% Genuine</h4>
                <div className={styles.delivery}>
                    <img className={styles.calender}
                        src='/icons/Calender.svg' alt='calender' />
                    <p className={styles.del}>Delivery by</p>
                </div>
                <p className={styles.detail}>Enter your pincode above to get these
                    details</p>
            </div>
        </div>
    )
}