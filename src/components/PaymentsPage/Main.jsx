// import { Footer } from "../deliveryAddressPage/footer"
import { BillingCard } from "./BillingCard/BillingCard"
import { CartCard } from "./CartCard/CartCard"
import { OrderSummeryCard } from "./OrderSummeryCard/OrderSummeryCard"
import { PaymentsCard } from "./PaymentCard/PaymentsCard"

export const PaymentsPage = () => {
    return<div style={{display:"flex", flexDirection:'column'}}>
        <div>
        <OrderSummeryCard/>
        <BillingCard/>
        <PaymentsCard/>
        </div>
        <div>
        <CartCard/>
        </div>
       
    </div>
}