import styles from './homeHeroComponent.module.css';

const BankBanner = () => {
    return (
        <div className= {styles.bankBanner}>
            <img className= {styles.bankBannerImg} src = "https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_01_17Dec.jpg" alt = "banner"/>
            <div className= {styles.bannerText}>
                <p>Already a member? <span className= {styles.textColor}>Login</span></p>
            </div>
        </div>
    )
}

export default BankBanner;