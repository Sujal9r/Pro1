import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import ScrollToTop from "./components/layout/ScrollToTop";
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SideBar />
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
