import {Switch, Route} from 'react-router-dom';
import SpecificProductPage  from '../components/SpecificProductPage/SpecificProductPage';
import {Main as Cart} from '../components/Cart/Main';
import {AddressCard} from '../components/deliveryAddressPage/AddressCard';
import Home from '../components/Home/Home';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path = '/' exact component={Home}/>
                <Route path = '/allProducts' component={Home}/>
                <Route path = '/allProducts/:id' component={SpecificProductPage}/>
                <Route path = '/cart' component={Cart}/>
                <Route path = '/address' component = {AddressCard}/>
            </Switch>
        </div>
    )
}

export default AppRoutes;