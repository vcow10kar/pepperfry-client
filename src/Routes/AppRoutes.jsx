import {Switch, Route} from 'react-router-dom';
import SpecificProductPage  from '../components/SpecificProductPage/SpecificProductPage';
import {Main as Cart} from '../components/Cart/Main';
import Home from '../components/Home/Home';
import AllproductPage from '../allProductPage/AllproductPage';
import { DeliveryCard } from '../components/DeliveryPage/main';
import { PaymentsPage } from '../components/PaymentsPage/Main';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path = '/' exact component={Home}/>
                <Route path = '/allProducts/:id' component={AllproductPage}/>
                <Route path = '/products/:id' component={SpecificProductPage}/>
                <Route path = '/cart' component={Cart}/>
                <Route path = '/delivery' component = {DeliveryCard}/>
                <Route path = '/payment' component = {PaymentsPage}/>
            </Switch>
        </div>
    )
}

export default AppRoutes;
