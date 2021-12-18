import styles from './shopAll.module.css';

const ShopAllDayComponent = ({ data }) => {
    return (
        <div className={styles.shopAllComponentDiv}>
            <div className= {styles.imgLinkDiv}>
                <img className={styles.imgLink} src={data.imgLink} alt="product" />
            </div>
            <p className = {styles.type}>{data.type}</p>
            <div className= {styles.details} ><p>{data.detail1} | {data.detail2}</p></div>
        </div>
    )
}

export default ShopAllDayComponent;