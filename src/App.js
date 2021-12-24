import './App.css';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { InvoiceDetailsContextProvider } from './context/InvoiceDetailsContext';




function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <AuthContextProvider>
      <InvoiceDetailsContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      </InvoiceDetailsContextProvider>
      </AuthContextProvider>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;


