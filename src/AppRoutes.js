import LoginPage from './components/LoginPage';
import { Register } from "./components/Register";

const AppRoutes = [
  {
        index: true,
        element: <LoginPage />
  },
  {
    path: '/Login',
    element: <LoginPage />
  },
  {
    path: '/Register',
    element: <Register />
  }
];

export default AppRoutes;
