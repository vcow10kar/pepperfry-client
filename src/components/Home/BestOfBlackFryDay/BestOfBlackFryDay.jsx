import BestOfComponent from "./BestOfComponent";
import styles from './bestOfComponent.module.css';

const data1 = [
    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_1.jpg",
        type: "Statement Wing Chairs",
        detail1: "140+ Products",
        detail2: "Starting ₹12,583"
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_2.jpg",
        type: "Compact Coffee Tables",
        detail1: "600+ Products",
        detail2: "Starting ₹900"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_3.jpg",
        type: "Minimalist Shoe Racks",
        detail1: "270+ Products",
        detail2: "Starting ₹445"
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_4.jpg",
        type: "Awe-Inspiring Sofas",
        detail1: "2000+ Products",
        detail2: "Starting ₹6,189"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_5.jpg",
        type: "Sleek End Tables",
        detail1: "500+ Products",
        detail2: "Starting ₹932"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_6.jpg",
        type: "Luxe Bar Furniture",
        detail1: "60+ Products",
        detail2: "Starting ₹19,994"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_7.jpg",
        type: "Cozy Beds",
        detail1: "450+ Products",
        detail2: "Starting ₹9,239"
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_08122021_8.jpg",
        type: "Elegant Entertainment Units",
        detail1: "200+ Products",
        detail2: "Starting ₹2,231"
    }
]

const data2 = [
    {
        imgLink: "https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_08122021_1.jpg",
        type: "Metal Wall Art",
        detail1: "140+ Products",
        detail2: "Starting ₹12,583"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_08122021_2.jpg",
        type: "Fine Dinnerware",
        detail1: "600+ Products",
        detail2: "Starting ₹900"
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_08122021_3.jpg",
        type: "Artistic Table Lamps",
        detail1: "270+ Products",
        detail2: "Starting ₹445"
    },

    {
        imgLink: "https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_08122021_4.jpg",
        type: "Striking Mirrors",
        detail1: "2000+ Products",
        detail2: "Starting ₹6,189"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_08122021_5.jpg",
        type: "Plush Carpets",
        detail1: "500+ Products",
        detail2: "Starting ₹932"
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_08122021_6.jpg",
        type: "Chic Pots & Planters",
        detail1: "60+ Products",
        detail2: "Starting ₹19,994"
    },

    {
        imgLink: "https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_08122021_7.jpg",
        type: "Whimsical Wall Plates",
        detail1: "450+ Products",
        detail2: "Starting ₹9,239"
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_08122021_8.jpg",
        type: "Snuggly Comforters",
        detail1: "200+ Products",
        detail2: "Starting ₹2,231"
    }
]

const BestOfBlackFryDay = () => {
    return (
        <div className= "reveal">
            <div className={styles.bestOfParent}>
                <div className={styles.bestOf}>
                    <div>
                        <p className={styles.header1}>BEST OF BLACK FRY-DAY</p>
                        <p className={styles.header2}>Explore Our Hot Sellers</p>
                    </div>

                    <div className={styles.bestOfAllComponents}>
                        {data1.map(item => {
                            return <BestOfComponent data={item} />
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

const ForgettingSomething = () => {
    return (
        <div className="reveal">
            <div className={styles.bestOfParent}>
                <div className={styles.bestOf}>
                    <div>
                        <p className={styles.header1}>WAIT! ARE YOU FORGETTING SOMETHING?</p>
                        <p className={styles.header2}>Must-Have Home Accessories</p>
                    </div>

                    <div className={styles.bestOfAllComponents}>
                        {data2.map(item => {
                            return <BestOfComponent data={item} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { BestOfBlackFryDay, ForgettingSomething };