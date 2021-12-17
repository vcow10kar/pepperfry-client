import { useState } from 'react';
import styles from './mid_item.module.css';

export const Mid_item = () => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleSub = () => {
        if (count == 0) {
            return;
        }
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div className={styles.quantity}>
            <div className={styles.counter}>
                    <button onClick={handleSub} className={styles.sub}>-</button>
                    <div className={styles.count_box}>
                        {
                            count
                        }
                    </div>

                <button onClick={handleAdd} className={styles.add}>+</button>
            </div>
                <div className={styles.price}>
                        <div className={styles.curr}>₹ 48,999</div>
                        <div className={styles.actualcurr}>₹ 46,699</div>
                </div>
          

        </div>
    )
}