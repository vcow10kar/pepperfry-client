import "./App.css";
import AppRoutes from "./Routes/AppRoutes";

import { PaymentsPage } from "./components/PaymentsPage/Main";
import { DeliveryCard } from "./components/DeliveryPage/Main";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <PaymentsPage/> */}
    </div>
  );
}

export default App;
