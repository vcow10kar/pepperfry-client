import styles from "./paymentBox.module.css"
export const Box = ({card,ischecked}) =>{
    return<div className={styles.box}>
            <input type="radio" checked={ischecked}/>
            <img className={styles.img} src={card} alt="card"/>
    </div>
}
