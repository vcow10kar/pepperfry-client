import { useState, useEffect } from 'react';
import styles from './mid_item.module.css';
import { updateCartItem, deleteItem } from '../../../../Redux/Cart/actions';
import { useDispatch } from 'react-redux';

export const Mid_item = ({ data }) => {
    const [count, setCount] = useState(data.quantity);
    const [currentPrice, setCurrentPrice] = useState((Math.floor((data.product.price) * (data.product.discount_percentage / 100))))
    const savings = data.product.price - currentPrice;

    let dispatch = useDispatch();

    const handleAdd = () => {
        setCount(count + 1);
        dispatch(updateCartItem(null, data.product, count + 1));
    }

    const handleSub = () => {

        setCount(count - 1);
        dispatch(updateCartItem(null, data.product, count - 1));

        // if(count < 2) {
        //     console.log('Count is zero...');
        //     dispatch(deleteItem(null, data.product));
        // }
    }

    const checkCount = () => {
        if (count < 1) {
            dispatch(deleteItem(null, data.product));
        }
    }

    useEffect(() => {
        checkCount();
    }, [count])

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
                <div className={styles.curr}>₹ {(data.product.price * count).toLocaleString('en-IN')}</div>
                <div className={styles.actualcurr}>₹ {(currentPrice * count).toLocaleString('en-IN')}</div>
            </div>
        </div>
    )
}