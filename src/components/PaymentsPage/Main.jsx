// import { Footer } from "../deliveryAddressPage/footer"
import { Footer } from "../deliveryAddressPage/footer"
import { BillingCard } from "./BillingCard/BillingCard"
import { CartCard } from "./CartCard/CartCard"
import { NavBar } from "./Nav/Nav"
import { OrderSummeryCard } from "./OrderSummeryCard/OrderSummeryCard"
import { PaymentsCard } from "./PaymentCard/PaymentsCard"

export const PaymentsPage = () => {
    return <div >
        <NavBar />
        <div style={{ display: 'flex',marginTop:"23px",marginLeft:"12.3%" }}>
            <div style={{display:"flex",flexDirection:"column",marginRight:"20px"}}>
                <OrderSummeryCard />
                <BillingCard />
                <PaymentsCard />
            </div>
            <div>
                <CartCard />
            </div>
        </div>
        <Footer />
    </div>
}