import styles from './productOverview.module.css';

export const ProductOverview = () => {
    const box = ['ADDITIONAL INFO', 'CARE', 'MERCHANT INFO', 'MERCHANT INFO', 'WARRANTY & INSTALLATION', 'CUSTOMER REDRESSAL', 'CANCELLATIONS'];

    return (

        <div className={styles.cont}>
            <p className= {styles.subheading2}>More Product Information</p>
            <p className= {styles.desc}>Niki sofa set (3+2+1) in sea green colour by Febonic</p>
            <div style={{ marginTop: "10px", display: 'flex' }}>
                <div className={styles.first}>OVERVIEW</div>
                <div className= {styles.options}>
                    {
                        box.map((e) => (
                            <div className={styles.rest}>{e}</div>
                        ))
                    }
                </div>

            </div>
            <div className={styles.big_cont}>
                <p className={styles.overview}>Overview:</p>
                <p className={styles.content}>
                    Febonic range of sofa set brings impeccable aesthetics and design value to your interiors. It is made with finest fabric and takes hours of craftmanship before we ship it to our beloved customers.
                </p>
            </div>
        </div>
    )
}