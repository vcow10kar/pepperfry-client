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
        <div>
            <OrderSummeryCard />
            <BillingCard />
            <PaymentsCard />

            <div>
                <CartCard />
            </div>
        </div>
        <Footer />
    </div>
}