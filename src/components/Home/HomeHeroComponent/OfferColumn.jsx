import styles from './homeHeroComponent.module.css';

const data = [
    {
        imgLink: 'https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_2X_FM-RHS_01112021.gif',
    },
    {
        imgLink: 'https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_Bottom_RHS_ICICI2X-21.png'
    }
]

const OfferColumn = () => {
    return (
        <div className= {styles.offerColumn}>
            {data.map(item => {
                return <img className = {styles.imgLink}  src={item.imgLink} alt = "column" />
            })}
        </div>
    )
}

export default OfferColumn;