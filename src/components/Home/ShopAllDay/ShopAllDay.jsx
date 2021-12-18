import ShopAllDayComponent from "./ShopAllDayComponent"
import styles from './shopAll.module.css';

const data = [
    {
        imgLink: 'https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_1.jpg',
        type: 'Memory Foam',
        detail1: '400+ Products',
        detail2: 'Starting ₹ 4,581'
    },

    {
        imgLink: 'https://ii3.pepperfry.com/media/wysiwyg/banners/tm_web_04102021_2.jpg',
        type: '#GreatestMattressEver',
        detail1: '40+ Products',
        detail2: 'Starting ₹ 5,279'
    },

    {
        imgLink: 'https://ii1.pepperfry.com/media/wysiwyg/banners/tm_web_04102021_3.jpg',
        type: 'Sofa Cum Foldable Mattress',
        detail1: '150+ Products',
        detail2: 'Starting ₹ 3,599'
    },

    {
        imgLink: 'https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_4.jpg',
        type: '100 Nights Trial',
        detail1: '300+ Products',
        detail2: 'Starting ₹ 4,399'
    }
]

const ShopAllDay = () => {
    return (
        <div className="reveal">
            <div className={styles.shopAll}>
                <p className={styles.header1}>SHOP ALL DAY. SLEEP ALL NIGHT.</p>

                <p className={styles.header2}>Upgrade Your Mattress</p>

                <div className={styles.shopAllComponents}>
                    {data.map(item => {
                        return <ShopAllDayComponent data={item} />
                    })}
                </div>

            </div>
        </div>

    )
}

export default ShopAllDay;