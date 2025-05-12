import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Landing from './Component/LandingPage/Landing.jsx';
import SignUp from './Component/Login/Signup';
import Hire from './Component/Hiring/Hire';
import { Career } from './Component/Navbar/Career';
import  Discover  from './Component/Features/Discover';
import Support from './Component/Features/Support';
import ScrollToTop from "./Component/Set/ScroolToTop.jsx";
import  Contactus  from './Component/Features/Contactus';
import SideBar from './Component/Features/SideBar.jsx';
import FinancePage from './Component/Navbar/Industries/Finance.jsx';
import EcommercePage from './Component/Navbar/Industries/E-commerce.jsx';
import Education from './Component/Navbar/Industries/Education.jsx';
import Healthcare from './Component/Navbar/Industries/Healthcare.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SideBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/hiring' element={<Hire/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/ecommerce' element={<EcommercePage/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/finance' element={<FinancePage/>}/>
        <Route path='/healthcare' element={<Healthcare/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
