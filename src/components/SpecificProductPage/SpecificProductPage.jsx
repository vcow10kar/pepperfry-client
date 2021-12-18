import { ProductHeader, ProductDetails, ProductColorVariants, ProductQuantity } from "./ProductComponents";
import { BankOffers, Delivery, EMIWarranty, ChristmasPromo } from "./ProductStaticComponents";
import { ExploreOptions, SimilarProductsDiv, MoreProductsDiv } from './ExploreProducts';
import { ProductOverview } from "../ProductOverview/ProductOverview";
import ProductsImageGallery from "./ProductsImageGallery";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from "react";
import styles from './specificProductPage.module.css';
import { ButtonsDiv } from '../Buttons/Buttons';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../Redux/Cart/actions";
import SearchNavbar from "../Navbar/SearchNavbar";

const product = {
    name: "Classic 3 Seater Sofa in Beige Colour",
    price: 38209,
    brand_id: {
        name: "ARRA"
    },
    category_id: "61b863f92011d8b8c537abca",
    details: {
        brand: "ARRA",
        dimensitions: "H 35 x W 65 x D 32; Seating Height:18 (all dimensions in inches)",
        weight: "33.5 KG",
        warranty: "12 Months' Warranty",
        assembly: "Carpenter Assembly",
        primary_materials: "Fabric",
        room_type: "Living Room",
        seating_height: "18",
        colour: "Beige",
        sku: "FN1788474-S-PM33832"
    },
    imagesArray: ["https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-y31pjj.jpg", "https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-zh6ihb.jpg", "https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-r6fqrl.jpg", "https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-mf1nqx.jpg", "https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-aj1x6q.jpg", "https://ii1.pepperfry.com/media/catalog/product/c/l/568x284/classic-3-seaterin-beige-by-arra-classic-3-seaterin-beige-by-arra-revobx.jpg"],
    colors: [
        {
            "colour": "Green",
            "imgLink": "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/darwin-3-seater-sofa-in-bottle-green-colour-by-urban-living-darwin-3-seater-sofa-in-bottle-green-col-syqrup.jpg",
            "_id": "61b872027122aec730c23dea"
        },
        {
            "colour": "Beige",
            "imgLink": "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/darwin-3-seater-sofa-in-beige-colour-by-urban-living-darwin-3-seater-sofa-in-beige-colour-by-urban-l-epwv5s.jpg",
            "_id": "61b872027122aec730c23deb"
        },
        {
            "colour": "Blue",
            "imgLink": "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/darwin-3-seater-sofa-in-blue-colour-in-urban-living-darwin-3-seater-sofa-in-blue-colour-in-urban-liv-kcpjct.jpg",
            "_id": "61b872027122aec730c23dec"
        }
    ],
    discount_percentage: 55
};


const SpecificProductPage = () => {
    const { user } = useSelector(state => state.login)
    const { id } = useParams();
    const [data, setData] = useState(product);
    const [quantity, setQuantity] = useState(1);
    const [cartStatus, setCartStatus] = useState(false);
    const [cart, setCart] = useState([]);
    let history = useHistory();

    let dispatch = useDispatch();

    const handleAddToCart = () => {
        console.log('Adding to cart - step 1');
        setCartStatus(!cartStatus);
        dispatch(addToCart(null, data, quantity));
    }

    const goToCart = () => {
        history.push('/cart');
    }

    const handleBuyNow = () => {
        console.log('Buy Now!');
    }

    const handleQuantityChange = (num) => {
        console.log(num);
        setQuantity(num);
    }

    //const data = [];


    const getData = () => {
        // const id = '61b872017122aec730c23de9';
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setData({ ...res.data });
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }

    useEffect(() => {
        document.title = `${data.name} | pepperfry`;
        getData();
    }, [data]);

    return (
        <div className={styles.specificProductPage}>
            <SearchNavbar/>
            <div className={styles.productsInformation}>
                <div>
                    <ProductsImageGallery data={data.imagesArray} />

                </div>

                <div className={styles.productsInformationText}>
                    <ProductHeader data={data} />

                    <ChristmasPromo />
                    <EMIWarranty />
                    <ProductColorVariants data={data} />
                    <BankOffers />
                    <ProductQuantity handleChange={handleQuantityChange} />
                    <div className={styles.buttonFlex}>
                        <ButtonsDiv text={cartStatus ? 'Go to Cart' : 'Add to Cart'} handleClick={cartStatus ? goToCart : handleAddToCart} icon={cartStatus ? <ArrowForwardIcon sx={{ color: 'white' }} /> : null} />
                        <ButtonsDiv text={'Buy Now'} handleClick={handleBuyNow} icon={null} />
                    </div>
                    <Delivery />
                    <ProductDetails data={data} />
                </div>
            </div>


            <SimilarProductsDiv />

            <ProductOverview />

            <div style={{ backgroundColor: '#F3F5F7' }}>
                <MoreProductsDiv />

                <ExploreOptions />
            </div>


        </div>
    )
}

export default SpecificProductPage;