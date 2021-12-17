import './App.css';
import { Main } from './components/Cart/Main';
import { AddressCard } from './components/deliveryAddressPage/AddressCard';
import { DeliveryCard } from './components/DeliveryPage/main';
import AppRoutes from './Routes/AppRoutes';
import SearchNavbar from './components/Navbar/SearchNavbar';

function App() {
  return (
    <div className="App">
      <SearchNavbar/>
      <AppRoutes/>
      {/* <DeliveryCard/> */}
    </div>
  );
}

export default App;
