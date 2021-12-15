import {ProductHeader, ProductDetails, ProductColorVariants, ProductQuantity} from "./ProductComponents";
import { BankOffers, Delivery, EMIWarranty, ChristmasPromo } from "./ProductStaticComponents";
import {ExploreOptions, SimilarProductsDiv, MoreProductsDiv} from './ExploreProducts';
import { ProductOverview } from "../ProductOverview/ProductOverview";

const SpecificProductPage = () => {
    const data = {
        name: "Classic 3 Seater Sofa in Beige Colour",
        price: 38209,
        brand_id: "61b865b5abbc2f0a89221b71",
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
        } ;

    console.log(data);
return (
    <div>
        <ProductHeader data = {data}/>
        <ProductDetails data = {data}/>

        <ProductColorVariants data = {data}/>

        <BankOffers/>

        <EMIWarranty/>

        <ProductQuantity/>

        <Delivery/>

       <ChristmasPromo/>

        <ProductOverview/>

        <ExploreOptions/>

        <SimilarProductsDiv/>

        <MoreProductsDiv/>
        
    </div>
)
}

export default SpecificProductPage;