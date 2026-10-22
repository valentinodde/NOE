import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/auth/AuthProvider';
import Protege from './components/auth/Protege';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import SectorsListPage from './pages/SectorsListPage';
import SectorDetailPage from './pages/SectorDetailPage';
import TerritoiresPage from './pages/TerritoiresPage';
import FichesPage from './pages/FichesPage';
import ConnexionPage from './pages/ConnexionPage';
import AdminPage from './pages/AdminPage';

// Tout le site demande une session, sauf la page de connexion. Les outils
// internes (éditeur des secteurs, fiches, administration) sont réservés aux admins.
const router = createBrowserRouter([
  {
    element: <AuthProvider><Outlet /></AuthProvider>,
    children: [
      {
        path: '/connexion',
        element: <ConnexionPage />,
      },
      {
        path: '/',
        element: <Protege><HomePage /></Protege>,
      },
      {
        path: '/etablissement/:siret',
        element: <Protege><CompanyPage /></Protege>,
      },
      {
        path: '/sectors',
        element: <Protege admin><SectorsListPage /></Protege>,
      },
      {
        path: '/sectors/:id',
        element: <Protege admin><SectorDetailPage /></Protege>,
      },
      {
        path: '/territoires',
        element: <Protege><TerritoiresPage /></Protege>,
      },
      {
        path: '/fiches',
        element: <Protege admin><FichesPage /></Protege>,
      },
      {
        path: '/admin',
        element: <Protege admin><AdminPage /></Protege>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
