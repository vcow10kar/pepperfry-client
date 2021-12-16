import styles from './exploreProducts.module.css';

const FromPopularBrands = () => {
    return (
        <div className={styles.fromPopularBrands}>
            <img src="/icons/vip-seo_2.svg" alt="Star icon" />
            <p className={styles.popularBrandHeader}>FROM POPULAR BRANDS</p>
            <div className={styles.popularHeaders}>
                <p>Supreme Chairs</p>
                <p>Nilkamal Shoe Rack</p>
                <p>Bohemian Arm Chairs</p>
                <p>Casacraft Sofa Sets</p>
                <p>Amberville Cupboard</p>
                <p>Cello Chairs</p>
                <p>Woodsworth Beds</p>
                <p>Nilkamal Plastic Tables</p>
                <p>Nilkamal Sofas</p>
            </div>

        </div>
    )
}

const ExploreMoreFromFurniture = () => {
    return (
        <div className={styles.exploreMoreFromFurniture}>
            <img src="/icons/vip_furniture.svg" alt="Star icon" />
            <p className={styles.popularBrandHeader}>EXPLORE MORE FROM FURNITURE</p>

            <div className={styles.exploreMoreFromFurnitureFlex}>
                <div className={styles.explorePopularHeaders}>
                    <p>Living Room Furniture</p>
                    <p>Dining Sets</p>
                    <p>Plastic Chairs</p>
                    <p>Benches</p>
                    <p>Stools</p>
                    <p>Bean Bags</p>
                    <p>Chairs</p>
                    <p>Dining Tables</p>
                </div>

                <div className={styles.explorePopularHeaders}>
                    <p>Ergonomic Chairs</p>
                    <p>Magazine Racks</p>
                    <p>Tables</p>
                    <p>Office Units</p>
                    <p>Tv Units</p>
                    <p>Swings</p>
                    <p>Sofas</p>
                    <p>Wardrobes</p>
                </div>

                <div className={styles.explorePopularHeaders}>
                    <p>Double Beds</p>
                    <p>Coffee Tables</p>
                    <p>Chest Of Drawers</p>
                    <p>Kitchen Cabinets</p>
                    <p>Bunk Beds</p>
                    <p>L Shape Sofas</p>
                    <p>Dressing Tables</p>
                    <p>Wine Racks</p>
                </div>

                <div className={styles.explorePopularHeaders}>
                    <p>Shoe Racks</p>
                    <p>Mattresses</p>
                    <p>Book Cases</p>
                    <p>Modular Wardrobes</p>
                    <p>Modular Kitchen</p>
                    <p>Beds</p>
                    <p>Sofa Sets</p>
                    <p>Office Furniture</p>
                </div>
            </div>
        </div>
    )
}

const ExploreOptions = () => {
    return (
        <div className= {styles.exploreOptionsDiv}>
            <div className={styles.displayFlex}>
                <ExploreMoreFromFurniture />
                <FromPopularBrands />
            </div>
        </div>

    )
}

const similarProducts = [
    {
        imgLink: "https://ii1.pepperfry.com/media/catalog/product/r/o/266x293/rome-3-seater-sofa-in-blue-colour-by-arra-rome-3-seater-sofa-in-blue-colour-by-arra-lydzo2.jpg",
        name: "Rome 3 Seater Sofa in Blue Velv...",
        price: 39600,
        current_price: 14552
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/catalog/product/r/o/266x293/rome-3-seater-in-green-colour-by-arra-rome-3-seater-in-green-colour-by-arra-5y4z2v.jpg",
        name: "Rome Sofa Set (3+1+1) in Green...",
        price: 89900,
        current_price: 26900
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/catalog/product/r/o/266x293/rome-3-seater-sofa-in-maroon-colour-by-arra-rome-3-seater-sofa-in-maroon-colour-by-arra-8lt8mt.jpg",
        name: "Rome 3 Seater Sofa in Maroon...",
        price: 40500,
        current_price: 14552
    },

    {
        imgLink: "https://ii1.pepperfry.com/media/catalog/product/r/o/266x293/rome-3-seater-sofa-in-yellow-colour-by-arra-rome-3-seater-sofa-in-yellow-colour-by-arra-zy1unn.jpg",
        name: "Rome 3 Seater Sofa in Yellow...",
        price: 40500,
        current_price: 14552
    }
]

const SimilarProductsCard = ({ data }) => {
    return (
        <div className={styles.similarProductCard}>
            <div className={styles.imgLinkDiv}>
                <img src={data.imgLink} alt="furniture" className={styles.similarImgLink} />
            </div>

            <p className={styles.similarProductsCardName}>{data.name}</p>

            <div className={styles.similarProductCardPricesFlex}>
                <p className={styles.current_price}>₹ {data.current_price.toLocaleString('en-EN')}</p>
                <p className={styles.original_price}>₹ {data.price.toLocaleString('en-EN')}</p>
            </div>
        </div>
    )
}

const SimilarProductsDiv = () => {
    return (
        <div className={styles.similarProductsDiv}>
            <div className={styles.similarProductsDivContainer}>
                <p className={styles.similarProductsHeader}>SIMILAR PRODUCTS</p>

                <div className={styles.similarProductsDivContainerFlex}>
                    {similarProducts.map(item => {
                        return <SimilarProductsCard data={item} />
                    })}
                </div>
            </div>

        </div>
    )
}

const brandProducts = [
    {
        imgLink: "https://ii1.pepperfry.com/media/catalog/product/c/l/364x184/classic-3-2-1-seater-sofa-in-brown-color-by-arra-classic-3-2-1-seater-sofa-in-brown-color-by-arra-8mq5lj.jpg",
        name: "Classic 3+2+1 Seater Sofa in Brown Color by Arra",
        price: 82100,
        current_price: 40116
    },

    {
        imgLink: "https://ii3.pepperfry.com/media/catalog/product/r/o/364x184/rome-3-seater-in-green-colour-by-arra-rome-3-seater-in-green-colour-by-arra-ktywsr.jpg",
        name: "Rome Sofa Set (3+2) in Green Colour by ARRA",
        price: 70400,
        current_price: 22364
    },

    {
        imgLink: "https://ii2.pepperfry.com/media/catalog/product/c/l/364x184/classic-3-2-seater-sofa-in-maroon-color-by-arra-classic-3-2-seater-sofa-in-maroon-color-by-arra-icui4p.jpg",
        name: "Classic 3+2+1 Seater Sofa in Maroon Color by...",
        price: 62900,
        current_price: 30732
    },
]

const MoreProductCard = ({ data }) => {
    return (
        <div className={styles.moreProductCard}>
            <div className={styles.moreImgLinkDiv}>
                <img src={data.imgLink} alt="furniture" className={styles.moreImgLink} />
            </div>

            <p className={styles.similarProductsCardName}>{data.name}</p>

            <div className={styles.moreProductCardPricesFlex}>
                <p className={styles.current_price}>₹ {data.current_price.toLocaleString('en-EN')}</p>
                <p className={styles.original_price}>₹ {data.price.toLocaleString('en-EN')}</p>
            </div>
        </div>
    )
}

const MoreProductsDiv = () => {
    return (
        <div className={styles.moreProductsDiv}>
            <div className={styles.moreProductsDivContainer}>
                <p className={styles.moreProductsHeader}>MORE PRODUCTS FROM BRAND</p>

                <p className={styles.styleGuru}>Our Style Guru</p>
                <p className={styles.styleGuruName}>Shruti Nair, Category Manager, Home</p>
                <p className={styles.brandDescription}>Febonic Is A Word Which Is Formed By Two Of The Brand's Quality Favorite And Unique. Febonic Is A New Brand In The Industry Run By Qualified Furniture Experts And A
                    Highly Experienced Production & Design Team. Our Priority Is To Provide The Utmost Comfort, Value For Money And In Vogue Colours And Designs To Our Customer. Febonic Will
                    Be Versatile In The Use Of Materials And Develop Products With Smart Features That Would Enhance Usability.</p>


                <div className={styles.moreProductsDivContainerFlex}>
                    {brandProducts.map(item => {
                        return <MoreProductCard data={item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export { FromPopularBrands, ExploreMoreFromFurniture, ExploreOptions, SimilarProductsDiv, MoreProductsDiv };