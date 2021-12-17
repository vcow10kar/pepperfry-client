import './App.css';


import AppRoutes from './Routes/AppRoutes';
import SearchNavbar from './components/Navbar/SearchNavbar';

function App() {
  return (
    <div className="App">
      <SearchNavbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
