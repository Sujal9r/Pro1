import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Landing from './Component/Landing';
import SignUp from './Component/Login/Signup';
import Hire from './Component/Hiring/Hire';
import { Career } from './Component/Navbar/Career';
import { Portfolio } from './Component/Navbar/Portfolio';
import  Discover  from './Component/Features/Discover';
import Support from './Component/Features/Support';
import ScrollToTop from "./Component/Set/ScroolToTop.jsx";
import  Contactus  from './Component/Features/Contactus';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/hiring' element={<Hire/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
