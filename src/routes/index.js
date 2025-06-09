import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/Signup';
import Landing from '../pages/main/Landing';
import Hire from '../pages/main/Hire';
import Career from '../pages/main/Career';
import Portfolio from '../pages/main/Portfolio';
import Discover from '../pages/main/Discover';
import Support from '../pages/main/Support';
import Contactus from '../pages/main/Contactus';

// Industry pages
import FinancePage from '../pages/industries/Finance';
import EcommercePage from '../pages/industries/E-commerce';
import Education from '../pages/industries/Education';
import Healthcare from '../pages/industries/Healthcare';

// Service pages
import UiuxDesign from '../pages/services/UiuxDesign';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import AppDevelopment from '../pages/services/AppDevelopment';
import WebDevelopment from '../pages/services/WebDevelopment';

export const routes = [
  {
    path: '/',
    element: Landing,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/signup',
    element: SignUp,
  },
  {
    path: '/hiring',
    element: Hire,
  },
  {
    path: '/career',
    element: Career,
  },
  {
    path: '/portfolio',
    element: Portfolio,
  },
  {
    path: '/discover',
    element: Discover,
  },
  {
    path: '/support',
    element: Support,
  },
  {
    path: '/contactus',
    element: Contactus,
  },
  // Industry routes
  {
    path: '/ecommerce',
    element: EcommercePage,
  },
  {
    path: '/education',
    element: Education,
  },
  {
    path: '/finance',
    element: FinancePage,
  },
  {
    path: '/healthcare',
    element: Healthcare,
  },
  // Service routes
  {
    path: '/app-development',
    element: AppDevelopment,
  },
  {
    path: '/digital-marketing',
    element: DigitalMarketing,
  },
  {
    path: '/ui-ux-design',
    element: UiuxDesign,
  },
  {
    path: '/web-development',
    element: WebDevelopment,
  },
]; 