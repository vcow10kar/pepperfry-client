import './App.css';
import { Main } from './components/Cart/Main';
import { PaymentsPage } from './components/PaymentsPage/Main';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      {/* <AppRoutes/> */}
      {/* <AddressCard/> */}
      <PaymentsPage/>
    </div>
  );
}

export default App;
