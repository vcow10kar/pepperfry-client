import { Footer } from "../deliveryAddressPage/footer.jsx"
import { BillingCard } from "./Billing/BillingCard.jsx"
import { CartCard } from "./CartCard/CartCard.jsx"
import { Form } from "./Form/Form.jsx"
import {NavBar} from "./Nav/Nav.jsx"
import { OrderSummeryCard } from "./OrderSummeryCard/OrderSummeryCard.jsx"
export const DeliveryCard = () =>{
    return<div>
        <NavBar/>
        <div style={{display:"flex",flexDirection:"column"}}>
            <OrderSummeryCard/>
            <BillingCard/>
            <Form/>
        </div>
        <CartCard/>
        <Footer/>
    </div>
}