import { Footer } from "../deliveryAddressPage/footer.jsx"
import { BillingCard } from "./Billing/BillingCard.jsx"
import { CartCard } from "../PaymentsPage/CartCard/CartCard";
import { Form } from "./Form/Form.jsx"
import {NavBar} from "./Nav/Nav.jsx"
import { OrderSummeryCard } from "./OrderSummeryCard/OrderSummeryCard.jsx"
export const DeliveryCard = () =>{
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
<NavBar />
<div style={{ display: 'flex',marginTop:"23px",marginLeft:"12.3%" }}>
    <div style={{display:"flex",flexDirection:"column",marginRight:"20px"}}>
        <OrderSummeryCard />
        <BillingCard />
        <Form/>
    </div>
    <div>
        <CartCard />
    </div>
</div>
<Footer />
</div>
}