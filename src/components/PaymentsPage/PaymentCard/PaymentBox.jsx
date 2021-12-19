import { Radio } from "@mui/material"
import styles from "./paymentBox.module.css"
export const Box = ({ card, ischecked, handleOnChange }) => {
    return <div>
        {
            ischecked === true ? <div  className={styles.box} style={{background:"#f8ba9ce3",border: "1px solid rgba(241, 101, 33, 1)"}}> <Radio type="radio" checked={ischecked} onChange={() => { handleOnChange(ischecked) }} />
                <img className={styles.img} src={card} alt="card" /></div>: <div  className={styles.box}> <Radio type="radio" checked={ischecked} onChange={() => { handleOnChange(ischecked) }} />
                <img className={styles.img} src={card} alt="card" /></div>
        }

    </div>
}
