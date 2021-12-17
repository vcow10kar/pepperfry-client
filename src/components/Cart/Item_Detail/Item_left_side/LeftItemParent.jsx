import { Left_Items } from "./Left_Items";
import {Left_Icon} from './Left_Icon';
import { Mid_item } from './Mid_Item';
import styles from './leftParent.module.css';


const LeftItemParent = ({data}) => {
    return (
        <div className={styles.leftParent}>
            <Left_Items data = {data}/>
                <Mid_item data = {data}/>
                <Left_Icon data = {data.product}/>
        </div>
    )
}

export default LeftItemParent