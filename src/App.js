import './App.css';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Navbar/>
        <AppRoutes />
      </BrowserRouter>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
