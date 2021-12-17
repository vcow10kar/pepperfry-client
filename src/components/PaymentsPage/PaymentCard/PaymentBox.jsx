import styles from "./paymentBox.module.css"
export const Box = ({card,ischecked,handleOnChange}) =>{
    return<div className={styles.box}>
            <input type="radio" checked={ischecked} onChange={()=>{handleOnChange(ischecked)}}/>
            <img className={styles.img} src={card} alt="card"/>
    </div>
}
