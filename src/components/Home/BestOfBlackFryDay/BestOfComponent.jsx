import styles from './bestOfComponent.module.css';

const BestOfComponent = ({ data }) => {
    return (
        <div>
            <div className={styles.bestOfComponentDiv}>
                <div className={styles.imgLinkDiv}>
                    <img className={styles.imgLink} src={data.imgLink} alt="product" />
                </div>
                <p className = {styles.type}>{data.type}</p>
                <div className = {styles.details}><p>{data.detail1} | {data.detail2}</p></div>
            </div>
        </div>
    )
}

export default BestOfComponent;