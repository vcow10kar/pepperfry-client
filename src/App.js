import './App.css';
import { Main } from './components/Cart/Main';
import { AddressCard } from './components/deliveryAddressPage/AddressCard';
import { DeliveryCard } from './components/DeliveryPage/main';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      {/* <AppRoutes/> */}
      <DeliveryCard/>
    </div>
  );
}

export default App;
