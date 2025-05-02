import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Landing from './Component/Landing';
import SignUp from './Component/Login/Signup';
import Hire from './Component/Hiring/Hire';
import { Career } from './Component/Navbar/Career';
import { Portfolio } from './Component/Navbar/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/hiring' element={<Hire/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
