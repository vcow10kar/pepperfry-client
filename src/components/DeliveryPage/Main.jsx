import { Footer } from "../deliveryAddressPage/footer.jsx"
import { BillingCard } from "./Billing/BillingCard.jsx"
import { CartCard } from "../PaymentsPage/CartCard/CartCard";
import { Form } from "./Form/Form.jsx"
import {NavBar} from "./Nav/Nav.jsx"
import { OrderSummeryCard } from "./OrderSummeryCard/OrderSummeryCard.jsx";
import PaymentsAccordion from "../PaymentsAccordion.jsx/PaymentsAccordion.jsx";
import { CartPrice } from "../Cart/CartPrice/CartPrice.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from './main.module.css';
import { NavbarCart } from "../Cart/Navbar/NavbarCart.jsx";

export const DeliveryCard = () =>{
    const [paymentDisplay, setPaymentDisplay] = useState(false);
    const {cart} = useSelector(state => state.cart);
    // return<div>
    //     <NavBar/>
    //     <div style={{display:"flex",flexDirection:"column"}}>
    //         <OrderSummeryCard/>
    //         <BillingCard/>
    //         <Form/>
    //     </div>
    //     <CartCard/>
    //     <Footer/>
    // </div>

return <div >
<NavbarCart/>
<div className = {styles.paymentsMainDiv}>
    {/* <div style={{display:"flex",flexDirection:"column",marginRight:"20px"}}>
        <OrderSummeryCard />
        <BillingCard />
        <Form/>
    </div> */}
    <PaymentsAccordion sx = {{width: '700px'}} data = {cart} paymentDisplay = {paymentDisplay} handleDisplay = {() => setPaymentDisplay(!paymentDisplay)}/>
    <div>
        <CartPrice data = {cart} />
        {paymentDisplay === true ? <CartCard/> : null}
    </div>
</div>
<Footer />
</div>
}