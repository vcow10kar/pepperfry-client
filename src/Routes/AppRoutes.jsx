import { Switch, Route } from "react-router-dom";
import SpecificProductPage from "../components/SpecificProductPage/SpecificProductPage";
import { Main as Cart } from "../components/Cart/Main";
import { AddressCard } from "../components/deliveryAddressPage/AddressCard";
import Home from "../components/Home/Home";
import AllproductPage from "../allProductPage/AllproductPage";
// import SearchNavbar from "../components/Navbar/SearchNavbar";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/allProducts" component={AllproductPage} />
        <Route path="/products/:id" component={SpecificProductPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/address" component={AddressCard} />
        {/* <Route path="/testing">{SearchNavbar}</Route> */}
      </Switch>
    </div>
  );
};

export default AppRoutes;
