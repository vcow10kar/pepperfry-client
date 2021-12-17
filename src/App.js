import './App.css';
import { Main } from './components/Cart/Main';
import { AddressCard } from './components/deliveryAddressPage/AddressCard';
import { DeliveryCard } from './components/DeliveryPage/main';
import AppRoutes from './Routes/AppRoutes';
import SearchNavbar from './components/Navbar/SearchNavbar';
import { PaymentsPage } from './components/PaymentsPage/Main';

function App() {
  return (
    <div className="App">
      {/* <SearchNavbar/>
      <AppRoutes/> */}
      {/* <DeliveryCard/> */}
      <PaymentsPage/>
    </div>
  );
}

export default App;
