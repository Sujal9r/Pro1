import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Landing from './Component/Landing';
import SignUp from './Component/Login/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
