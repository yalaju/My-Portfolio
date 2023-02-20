import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './Components/Navbar1';
import Landingpag from './pages/Landingpag';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Landingpag/>}/>
          {/* <Route path="/about" element={<Aboutpage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
