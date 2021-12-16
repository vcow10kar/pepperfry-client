import styles from './productComponents.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductHeader = ({ data }) => {
    const price = Math.floor((data.price) * (data.discount_percentage / 100));
    const savings = data.price - price;
    return (
        <div>
            <p className={styles.heading1}>{data.name}</p>
            <p className={styles.subheading1}>By {data.brand_id.name}</p>

            <div className={styles.subheading2Div}>
                <p className={styles.fontColorJoyOrange}>₹{price.toLocaleString('en-EN')}</p>
                <p className={styles.textStrikeThrough}>₹{data.price.toLocaleString('en-EN')} MRP</p>
                <p>(Inclusive of all taxes)</p>
            </div>

            <div className={styles.subheading1Div}>
                <p className={styles.subheading1}>Total Savings</p>
                <span className={styles.fontColorJoyOrange}> ₹{savings.toLocaleString('en-En')} ({data.discount_percentage}% off) </span>
                <ArrowForwardIosIcon sx={{ size: 'small', color: '#F57B2D', marginLeft: '23px' }} />
            </div>
        </div>
    )
}

const ProductDetails = ({ data }) => {
    return (
        <div className={styles.displayFlex}>
            <div className={styles.detailsDiv}>
                <p className={styles.subheading1}>Details</p>
            </div>

            <div className={styles.detailsDescpription}>
                <p>Brand: <span>{data.details.brand}</span></p>
                <p>Dimensions: <span>{data.details.dimensitions}</span></p>
                <p>Weight: <span>{data.details.weight}</span></p>
                <p>Warranty: <span>{data.details.warranty}</span></p>
                <p>Assembly: <span>{data.details.assembly}</span></p>
                <p>Primary Materials: <span>{data.details.primary_materials}</span></p>
                <p>Room Type: <span>{data.details.room_type}</span></p>
                <p>Seating Height: <span>{data.details.seating_height}</span></p>
                <p>Colour: <span>{data.details.colour}</span></p>
                <p>Sku: <span>{data.details.sku}</span></p>

                <p className={styles.fontColorBlueberryBlue}>See More Information</p>
            </div>
        </div>
    )
}

const ProductColorVariants = ({ data }) => {
    return (
        <div className={styles.displayFlex}>
            <div className={styles.detailsDiv}>
                <p className={styles.subheading1}>Colour</p>
            </div>

            <div className={styles.productColorsDiv}>
                {data.colors.map(item => {
                    return <img src={item.imgLink}  alt = "colors"/>
                })}
            </div>
        </div>
    )
}

const ProductQuantity = ({handleChange}) => {
    const handleQuantityChange = (e) => {
        handleChange(Number(e.target.value));
    }
    return (
        <div className={styles.displayFlex}>
            <div className={styles.detailsDiv}>
                <p className={styles.subheading1}>Quantity</p>
            </div>

            <div className={styles.subheading1}>
                <select className={styles.selectOption} onChange = {handleQuantityChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                </select>
            </div>
        </div>
    )
}

export { ProductHeader, ProductDetails, ProductColorVariants, ProductQuantity };