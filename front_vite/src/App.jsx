import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import SectorsListPage from './pages/SectorsListPage';
import SectorDetailPage from './pages/SectorDetailPage';
import TerritoiresPage from './pages/TerritoiresPage';
import FichesPage from './pages/FichesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/etablissement/:siret',
    element: <CompanyPage />,
  },
  {
    path: '/sectors',
    element: <SectorsListPage />,
  },
  {
    path: '/sectors/:id',
    element: <SectorDetailPage />,
  },
  {
    path: '/territoires',
    element: <TerritoiresPage />,
  },
  {
    path: '/fiches',
    element: <FichesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
