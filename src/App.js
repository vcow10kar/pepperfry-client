import './App.css';


import AppRoutes from './Routes/AppRoutes';
import SearchNavbar from './components/Navbar/SearchNavbar';
import { PaymentsPage } from './components/PaymentsPage/Main';

function App() {
  return (
    <div className="App">
      <SearchNavbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
